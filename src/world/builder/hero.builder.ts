import Actor from '../../engine/Actor';
import RandomBuilder from './RandomBuilder';

export default class HeroBuilder extends RandomBuilder{
    hero:Actor;
    constructor({seed}){
        super({seed});
    }
    hair(){

    }
    facialHair(){

    }
    skinColor(){

    }
    pantsShape(){

    }
    pantsColor(){

    }
    build(): Actor{
        return this.hero;
    }
}