import { Turn } from '../../engine/Turn';
import * as SequelizeStatic from 'sequelize';
import { DataTypes, Sequelize } from 'sequelize';

/**
 *
 */
export interface TurnAttributes extends Turn {
    uuid: string;
    timeout: number;
}

export interface TurnInstance extends SequelizeStatic.Instance<TurnAttributes>, TurnAttributes {
    // todo
}

export interface TurnModel extends SequelizeStatic.Model<TurnInstance, TurnAttributes> {
    // todo
}

export function defineTurn(sequelize: Sequelize, dataTypes: DataTypes): TurnModel {
    let turnModel = sequelize.define<TurnInstance, TurnAttributes>("Turn", {
        uuid: {
            type: dataTypes.UUID,
            allowNull: false,
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
            timestamps: true
        });

    return turnModel;
}