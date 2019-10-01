import Router from '../inputs/Router';

export default class RouterActions{
    static navigationComplete(){
        return {
            type: 'NAVIGATION/COMPLETE',
            location: Router.lookup(window.location.hash.substr(1))
        };
    }
}