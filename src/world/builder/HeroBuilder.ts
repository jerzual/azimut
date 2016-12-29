import Hero from '../../engine/Hero';
import RandomBuilder from './RandomBuilder';

export default class HeroBuilder extends RandomBuilder{
    hero:Hero;
    constructor({seed}){
        super({seed});
        this.hero = new Hero({});
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
    build(){
        return this.hero;
    }
}