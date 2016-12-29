import 'mocha';
import * as chai from 'chai';
import * as http from 'http';
import * as supertest from 'supertest';
import {PlagueServer} from '../../src/server/index';

const expect = chai.expect;

import * as request from 'supertest';
import app from './../../app';

describe('Server HTTP requests', () => {
    let server:http.Server;
    beforeEach(() => {
    });
  it('should get 200 response from healthCheck', done => {
    request(app)
      .get('/')
      .expect(200)
      .end( (err, res) => {
        if (err) {
          done.fail(err);
        } else {
          done();
        }
      });
  });

  it('should get 404 from unknown route', done => {
    request(app)
      .get('/asodkoasd9923942ik3koadskoaksda9isd')
      .expect(404)
      .end( (err, res) => {
        if (err) {
          done.fail(err);
        } else {
          done();
        }
      });
  });

});