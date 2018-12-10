const DROP_ITEM = 'DROP_ITEM';
const ITEM_DROPPED = 'ITEM_DROPPED';
const PICKUP_ITEM = 'PICKUP_ITEM';
const ITEM_PICKED_UP = 'ITEM_PICKEDUP';

export default class ItemActions {
  static dropItem() {
    return {
      type: 'DROP_ITEM',
    };
  }
  static itemDropped() {
    return {
      type: 'DROP_ITEM',
    };
  }
}
