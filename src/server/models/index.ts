import { ActionModel } from '../models/ActionModel';
import { ActorModel } from '../models/ActorModel';
import { CityModel } from '../models/CityModel';
import { ItemModel } from '../models/ItemModel';
import { PartyModel } from '../models/PartyModel';
import { PlayerModel } from '../models/PlayerModel';
import { TileModel } from '../models/TileModel';
import { TurnModel } from '../models/TurnModel';

import { Model, Schema, Connection } from 'mongoose';

export interface Core {
    action:Model<ActionModel>;
    actor:Model<ActorModel>;
    city:Model<CityModel>;
    item:Model<ItemModel>;
    party:Model<PartyModel>;
    player:Model<PlayerModel>;
    tile:Model<TileModel>;
    turn: Model<TurnModel>;
}

export class Database{
    models: Core;
    constructor(connection:Connection) {
        
    }
    getModels():Core{
        return this.models;
    }
}

export default Core;