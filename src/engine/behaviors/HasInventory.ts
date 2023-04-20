import Item from '../Item';
import { ConcreteBehavior, Behavior } from './Behavior';

const MAX_ITEMS = 42;

export class HasInventoryAgent {
	items: Array<Item>;

	get isFull() {
		return this.items.length < MAX_ITEMS;
	}
}

export class HasInventory extends ConcreteBehavior implements Behavior {}
