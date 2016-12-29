import { ActionAttributes, ActionInstance, ActionModel, defineAction } from '../models/ActionModel';
import { ActorAttributes, ActorInstance, ActorModel, defineActor } from '../models/ActorModel';
import { ItemAttributes, ItemInstance, ItemModel, defineItem } from '../models/ItemModel';
import { CityAttributes, CityInstance, CityModel, defineCity } from '../models/CityModel';
import { PartyAttributes, PartyInstance, PartyModel, defineParty } from '../models/PartyModel';
import { PlayerAttributes, PlayerInstance, PlayerModel, definePlayer } from '../models/PlayerModel';
import { TileAttributes, TileInstance, TileModel, defineTile } from '../models/TileModel';
import { TurnAttributes, TurnInstance, TurnModel, defineTurn } from '../models/TurnModel';
import * as Sequelize from 'sequelize';

export interface Models {
    Action: ActionModel;
    Actor: ActorModel;
    City: CityModel;
    Item: ItemModel;
    Party: PartyModel;
    Player: PlayerModel;
    Tile: TileModel;
    Turn: TurnModel;
}

export class Database{
    public models: Models;
    constructor(sequelize: Sequelize.Sequelize) {
        const models:Models = {
         Action : sequelize.import('ActionModel', defineAction),
         Actor : sequelize.import('ActorModel', defineActor),
         City : sequelize.import('CityModel', defineCity),
         Item : sequelize.import('ItemModel', defineItem),
         Party : sequelize.import('PartyModel', defineParty),
         Player : sequelize.import('PlayerModel', definePlayer),
         Tile : sequelize.import('TileModel', defineTile),
         Turn : sequelize.import('TurnModel', defineTurn)
        };
        models.Action.belongsTo(models.Actor);
        models.Actor.hasMany(models.Action);
        models.Player.belongsTo(models.City);
        models.City.hasMany(models.Player);
        models.City.hasMany(models.Actor);
        models.City.hasMany(models.Tile);
        models.City.hasMany(models.Item);
        Object.keys(models)
            .forEach(function(modelName) {
            if ("associate" in models[modelName]) {
                models[modelName].associate(models);
            }
        });
        this.models = models;
    }
    getModels():Models{
        return this.models;
    }
}