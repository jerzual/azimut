import { describe, expect, it } from 'vitest';
import { ItemImpl } from './Item';

describe('Item interface', () => {
	it('can be created', () => {
		const item = new ItemImpl();
		expect(item).toBeDefined();
	});
});
