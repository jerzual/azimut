
import {createInitialState} from './InitialState';

describe('InitialState',()=>{
    let initialState;
    beforeEach(()=>{
        initialState = createInitialState();
    })
    it('should present default options',()=>{
        expect(initialState.options).toBeDefined();
        expect(initialState.navigation.url).toBe('/');
    });
    it('should restore options from localStorage if defined',()=>{
        expect(initialState.options).toBeDefined();
    });
})