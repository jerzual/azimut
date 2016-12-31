import Tile from "../../engine/Tile";
import * as SequelizeStatic from 'sequelize';
import { DataTypes, Sequelize } from 'sequelize';

/**
 *
 */
export interface TileAttributes extends Tile {
    uuid: string;
    x: number;
    y: number;
    z: number;
    city_id: string;
}

export interface TileInstance extends SequelizeStatic.Instance<TileAttributes>, TileAttributes {
    // todo
}

export interface TileModel extends SequelizeStatic.Model<TileInstance, TileAttributes> {
    // todo
}

export function defineTile(sequelize: Sequelize, dataTypes: DataTypes): TileModel {
    let tileModel = sequelize.define<TileInstance, TileAttributes>("Tile", {
        uuid: {
            type: dataTypes.UUID,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: dataTypes.TEXT,
            allowNull: true
        }
    }, {
            indexes: [],
            classMethods: {},
            timestamps: false
        });

    return tileModel;
}