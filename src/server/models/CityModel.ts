import City from "../../world/City";
import Tile from "../../engine/Tile";

import * as SequelizeStatic from 'sequelize';
import { DataTypes, Sequelize } from 'sequelize';

/**
 * A city is the main playground session where players play.
 * 
 */
export interface CityAttributes extends City {
    width: number;
    height: number;
    tiles: Array<Array<Tile>>;
    players: Array<Object>;
}


export interface CityInstance extends SequelizeStatic.Instance<CityAttributes>, CityAttributes {
    // todo
}

export interface CityModel extends SequelizeStatic.Model<CityInstance, CityAttributes> {
    // todo
}

export function defineCity(sequelize: Sequelize, dataTypes: DataTypes): CityModel {
    const cityModel = sequelize.define<CityInstance, CityAttributes>(
        "City",
        {
            "id": {
                "type": dataTypes.UUID,
                "allowNull": false,
                "primaryKey": true
            }
        }
    );
    return cityModel;
};