import Item from "../Item";

const MAX_ITEMS=42;

class HasInventory{
    items:Array<Item>;

    get isFull(){
        return this.items.length < MAX_ITEMS;
    }
}