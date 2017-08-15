import uuid from 'uuid';
/**
 * Actions are user
 */
export interface Action{
    uuid:string;
    timestamp:number;
    type:ActionTypes;
}
export enum ActionTypes{
    ATTACK,
    DEFEND,
    MOVE,
    TALK,
    PICKUP,
    DROP,
    ENTER,
    LEAVE
}
export const actionFactory = (type: ActionTypes):Action =>  {
    return {
        uuid: uuid.v4(), 
        timestamp: Date.now(), 
        type
    }
};
export default Action;
