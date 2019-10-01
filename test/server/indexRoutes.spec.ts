

import * as http from 'http';
import * as request from 'supertest';

import { AzimutServer } from '../../src/server/index';

import app from './../../src/server/index';

describe('Server HTTP requests', () => {
    let server:http.Server;
    beforeEach(() => {
    });
  it('should get 200 response from /', done => {
    request(app)
      .get('/')
      .expect(200)
      .end( (err, res) => {
        if (err) {
          done(err);
        } else {
          console.log(res.body);
          done();
        }
      });
  });

  it('should get 200 OK and index.html content from unknown route', done => {
    request(app)
      .get('/asodkoasd9923942ik3koadskoaksda9isd')
      .expect(200)
      .end( (err, res) => {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });

});