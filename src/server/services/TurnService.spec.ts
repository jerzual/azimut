import { expect } from 'chai';
import * as sinon from 'sinon';
import TurnService from './TurnService';
import { Database, Models } from '../models/index';

describe('TurnService', () => {
    let turnService;
    let storageMock:Models;
    let sequelizeMock:any;
    beforeEach(() => {
        storageMock = sinon.spy(Storage);
        storageMock.Turn = sinon.spy();
        
        sequelizeMock = sinon.spy();
        turnService = new TurnService(sequelizeMock,storageMock);
    })

    describe('creates turn',()=>{
        it('should create a turn with default values',()=>{
            
        });
        it('should fail validation with default values',()=>{

        });
    })
});