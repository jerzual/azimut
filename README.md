# Azimut Game (working title)

<pre>
██   ▄▄▄▄▄▄   ▄█ █▀▄▀█   ▄     ▄▄▄▄▀
█ █ ▀   ▄▄▀   █  █ █ █    █ ▀▀▀ █
█▄▄█ ▄▀▀   ▄▀ █  █ ▄ █ █   █    █
█  █ ▀▀▀▀▀▀   ▐█ █   █ █   █   █
   █           ▐    █  █▄ ▄█  ▀
  █                ▀    ▀▀▀
 ▀
</pre>

A turn based party survival game in your browser

It is a total rework of old, still non-working, code... and a side-project, so don't expect anything.

## Tech Stack

TypeScript, the web platform.

- [Angular 21](https://angular.dev/) as the main UI framework
- [THREE.js](https://threejs.org/) & [angular-three v4](https://angularthree.org/) for the 3D / game engine
- [Signal store](https://ngrx.io/guide/signals/signal-store) for state management
- [RxDB](https://rxdb.info/) for data replication and local-first aspects.
- [Rot.js](https://ondras.github.io/rot.js/hp/) for level generation / rogue-like aspects.
- [Tone.js](https://tonejs.github.io/) and [Tonal](https://github.com/tonaljs/tonal) for music / sound
- [node.js](https://nodejs.org) / [fastify](https://fastify.dev) / [couchdb](https://docs.couchdb.org) for server-side storage.
- [vitest](https://vitest.dev/) / [playwright](https://playwright.dev/) for tests.

## How to run ?

### Pre-requisites

- [git](https://git-scm.com/)
- [node.js >= 24](https://nodejs.org/) & [pnpm](https://pnpm.io/)
- [docker](https://hub.docker.com/)

### Installation

```bash
git clone git@github.com:jerzual/azimut.git
cd azimut
pnpm install
pnpm start
```

### Docker (full stack)

```bash
make build
make start
```

### Development

Open <http://localhost:4200>

## Running E2E Tests

E2E tests use Playwright with a remote browser running inside Docker. The test runner executes locally and connects to the browser container via WebSocket.

### Docker stack services

| Service        | Port | Description                           |
|----------------|------|---------------------------------------|
| `couchdb`      | 5984 | CouchDB database                      |
| `couchdb-init` | -    | Creates system databases on first run |
| `server`       | 4000 | Angular SSR + Fastify server          |
| `tests`        | 3000 | Playwright remote browser             |

### 1. Start the Docker stack

```bash
make start
```

Wait for all services to be healthy:

```bash
docker compose ps
```

The `server` service should show `healthy` before running tests.

### 2. Run the tests

```bash
make test
```

Screenshots, traces, and video recordings are saved to `test-results/`.

### 3. View the HTML report

```bash
make test-show
```

Opens an interactive report with embedded screenshots, traces, and videos.

### 4. Stop the stack

```bash
make stop
```
