import * as SequelizeStatic from 'sequelize';
import { DataTypes, Sequelize } from 'sequelize';

/**
 *
 */
export interface ActorAttributes {
    uuid: string;
    actionPoints: number;
    lifePoints: number;
    items: Array<any>;
}

export interface ActorInstance extends SequelizeStatic.Instance<ActorAttributes>, ActorAttributes {
    // todo
}

export interface ActorModel extends SequelizeStatic.Model<ActorInstance, ActorAttributes> {
    // todo
}

export function defineActor(sequelize: Sequelize, dataTypes: DataTypes): ActorModel {
    const actorModel = sequelize.define<ActorInstance, ActorAttributes>(
        'Actor',
        {
            id: {
                type: dataTypes.UUID,
                allowNull: false,
                primaryKey: true
            },
            actionPoints: {
                type: dataTypes.STRING(128),
                allowNull: false
            },
        },
        {
            timestamps: true,
        }
    );
    return actorModel;
}