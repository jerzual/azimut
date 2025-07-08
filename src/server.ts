import {
	AngularNodeAppEngine,
	createNodeRequestHandler,
	isMainModule,
	writeResponseToNodeResponse,
} from '@angular/ssr/node';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import fastifyStatic from '@fastify/static';
import fastifyReverseProxy from '@fastify/http-proxy';
import fastify from 'fastify';

const server = fastify({ logger: true });
const angularNodeAppEngine = new AngularNodeAppEngine();
const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');
server.register(fastifyStatic, { root: browserDistFolder, wildcard: false });
server.get('*', async (req, reply) => {
	try {
		const response = await angularNodeAppEngine.handle(req.raw, {
			server: 'fastify',
		});
		if (response) {
			await writeResponseToNodeResponse(response, reply.raw);
		} else {
			reply.callNotFound();
		}
	} catch (error) {
		reply.send(error);
	}
});

// With this config, /404 will not reach the Angular app
server.setNotFoundHandler((_req, reply) => {
	reply.send('This is a server only error');
});

/**
 * CouchDB reverse proxy endpoint
 */
const couchdbHost =
	process.env['AZIMUT_COUCHDB_HOST'] || 'http://localhost:5984';

/**
 * needed to expose couchdb without multiple domains
 */
server.register(async function (fastify) {
	await fastify.register(fastifyReverseProxy, {
		upstream: couchdbHost,
		prefix: '/db',
		http2: false,
		replyOptions: {
			rewriteRequestHeaders: (originalReq, headers) => {
				return {
					...headers,
					connection: 'keep-alive',
					'x-forwarded-for':
						originalReq.headers['x-forwarded-for'] ||
						originalReq.socket.remoteAddress,
				};
			},
		},
	});
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
	const port = +(process.env['PORT'] || 4000);
	const host = process.env['HOST'] || '0.0.0.0';
	server.listen({ port, host }, () => {
		console.log(`Fastify server listening on http://${host}:${port}`);
	});
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(async (req, res) => {
	await server.ready();
	server.server.emit('request', req, res);
});
