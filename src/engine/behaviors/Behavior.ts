// this will allow for behaviors to know each others.

export const enum Behaviors{
    EnvironmentAware,
    Fightable,
    Droppable,
    Pickupable,
    Pathfollower,
    ActionPoints,
    HasInventory,
    HasHealth,
}
export interface Behavior{

    execute:Function;
    type:Behaviors;
    
}