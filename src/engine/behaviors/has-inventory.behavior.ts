import Item from '../item.class';
import { ConcreteBehavior, Behavior } from './behavior.class';

const MAX_ITEMS = 42;

export class HasInventoryAgent {
	items: Item[];

	get isFull() {
		return this.items.length < MAX_ITEMS;
	}
}

export class HasInventory extends ConcreteBehavior implements Behavior {}
