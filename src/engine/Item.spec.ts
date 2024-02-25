import { describe, expect, it } from 'vitest';
import { Item, ItemImpl } from './Item';

describe('Item interface', () => {
	it('can be created', () => {
		const item = new ItemImpl();
		expect(item).toBeDefined();
	});
});
