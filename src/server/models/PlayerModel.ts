import * as SequelizeStatic from 'sequelize';
import { DataTypes, Sequelize } from 'sequelize';


export interface FacebookAuthProps {
    tokenID;
}
export interface PlayerAttributes {
    uuid?: string;
    name?: string;
    email?: string;
    password?: string;
    facebook?: FacebookAuthProps;
}

export interface PlayerInstance extends SequelizeStatic.Instance<PlayerAttributes>, PlayerAttributes {
    // todo
}

export interface PlayerModel extends SequelizeStatic.Model<PlayerInstance, PlayerAttributes> {
    // todo
}


export function definePlayer(sequelize: Sequelize, dataTypes: DataTypes): PlayerModel {
    let playerModel = sequelize.define<PlayerInstance, PlayerAttributes>("Player", {
        "id": {
            "type": dataTypes.UUID,
            "allowNull": false,
            "primaryKey": true
        },
        "name": {
            "type": dataTypes.STRING(128),
            "allowNull": false
        },
        "email": {
            "type": dataTypes.STRING(128),
            "allowNull": false,
            "unique": true,
            "validate": {
                "isEmail": true
            }
        },
        "password": {
            "type": dataTypes.STRING(128),
            "allowNull": false
        }
    },
        {
            "tableName": "accounts",
            "timestamps": true,
            "createdAt": "created_at",
            "updatedAt": "updated_at",
        });

    return playerModel;
}