import 'mocha';
import {expect} from 'chai';
import {createInitialState} from './InitialState';

describe('InitialState',()=>{
    let initialState;
    beforeEach(()=>{
        initialState = createInitialState();
    })
    it('should present default options',()=>{
        expect(initialState.options).to.exist;
    });
    it('should present default options',()=>{
        expect(initialState.options).to.exist;
    });
})