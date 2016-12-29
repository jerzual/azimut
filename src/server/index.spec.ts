import 'mocha';
import {expect} from 'chai';
import PlagueServer from './index';

describe('server index', () => {
    let plagueServer:PlagueServer;
    beforeEach(() => {
        plagueServer = new PlagueServer();
    });
    describe('should start on given port',()=>{
        plagueServer.start();
        expect(plagueServer.server).to.exist;
    });
});