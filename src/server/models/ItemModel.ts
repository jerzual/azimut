import {Sprite} from 'three';
import * as SequelizeStatic from 'sequelize';
import { DataTypes, Sequelize } from 'sequelize';

export interface ItemAttributes {
    uuid: string;
    name: string;
    ap: number;
    hp: number;
    description: string;
}

export interface ItemInstance extends SequelizeStatic.Instance<ItemAttributes>, ItemAttributes {
    // todo
}

export interface ItemModel extends SequelizeStatic.Model<ItemInstance, ItemAttributes> {
    // todo
 }
 
export function defineItem(sequelize: Sequelize, dataTypes: DataTypes): ItemModel {
    
        const itemModel = sequelize.define<ItemInstance, ItemAttributes>(
            "Item",
            {
                "id": {
                    "type": dataTypes.UUID,
                    "allowNull": false,
                    "primaryKey": true
                }
            }
        );
        return itemModel;
};