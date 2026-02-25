import { describe, expect, it } from 'vitest';
import { ItemImpl } from './item.class';

describe('Item interface', () => {
	it('can be created', () => {
		const item = new ItemImpl();
		expect(item).toBeDefined();
	});
});
