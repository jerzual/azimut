import * as SequelizeStatic from 'sequelize';
import { DataTypes, Sequelize } from 'sequelize';

export interface PartyAttributes {
    uuid: string;
    name: string;
    //members:Array<Actor>;
}
export interface PartyInstance extends SequelizeStatic.Instance<PartyAttributes>, PartyAttributes {
    // todo
}

export interface PartyModel extends SequelizeStatic.Model<PartyInstance, PartyAttributes> {
    // todo
}

export function defineParty(sequelize: Sequelize, dataTypes: DataTypes): PartyModel {
    let partyModel = sequelize.define<PartyInstance, PartyAttributes>(
        'Party',
        {
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
        },
        {

        });
    return partyModel;
}