import CityBuilder from "./world/builder/CityBuilder";
import HeroBuilder from "./world/builder/HeroBuilder";
import Tile from "./engine/Tile";
import Actor from "./engine/Actor";
import Turn, { TurnImpl } from "./engine/Turn";
import City from "./world/City";
import Party from "./engine/Party";
import { Chance } from "chance";
import { Engine } from "babylonjs";
//principal events binding and game init /loop

export default class AzimutGame {
    city: City;
    party: Array<Actor>;
    turns: Array<Turn>;
    chance: Chance.Chance;
    startTime:number;
    newGame(){
        this.chance = new Chance();
        this.turns.push(new TurnImpl());
        this.city = new CityBuilder({seed:Math}).build();
        let hero = new HeroBuilder({seed:Math}).build();
        this.party.push(hero);
        this.startTime = 0.0;
    }
    endTurn(){

    }
    isGameLost(){

    }
    options(){

    }
    //move this to input handling
    rotateLeft(){

    }
    rotateRight(){

    }
    selectTile(x,y){

    }

}
