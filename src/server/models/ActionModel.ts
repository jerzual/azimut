import * as SequelizeStatic from "sequelize";
import { DataTypes, Sequelize } from 'sequelize';

export interface ActionAttributes {
    uuid: string;
    actionType: any;
    payload: any;
}


export interface ActionInstance extends SequelizeStatic.Instance<ActionAttributes>, ActionAttributes {
    // todo

}

export interface ActionModel extends SequelizeStatic.Model<ActionInstance, ActionAttributes> {
    // todo
}

export function defineAction(sequelize: Sequelize, dataTypes: DataTypes): ActionModel {
    const actionModel = sequelize.define<ActionInstance, ActionAttributes>(
        "Action",
        {
            "id": {
                "type": dataTypes.UUID,
                "allowNull": false,
                "primaryKey": true
            }
        }
    );
    return actionModel;
}