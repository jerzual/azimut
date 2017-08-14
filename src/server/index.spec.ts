import 'mocha';
import { expect } from 'chai';
import { AzimutServer } from './index';

describe('server index', () => {
    let server:AzimutServer;
    beforeEach(() => {
        server = new AzimutServer();
    });
    describe('should start on given port',() =>{
        server.start();
        expect(server.server).to.exist;
    });
});