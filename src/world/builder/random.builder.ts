/**
 * Seeded PRNG using mulberry32.
 * Replaces the heavy Chance.js dependency — we only need
 * random(), natural(), and string() for world generation.
 */

function hashSeed(seed: string): number {
	let h = 0;
	for (let i = 0; i < seed.length; i++) {
		h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0;
	}
	return h >>> 0;
}

function mulberry32(state: number): () => number {
	let s = state;
	return () => {
		s |= 0;
		s = (s + 0x6d2b79f5) | 0;
		let t = Math.imul(s ^ (s >>> 15), 1 | s);
		t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
}

export class SeededRng {
	private nextFloat: () => number;

	constructor(seed: string) {
		this.nextFloat = mulberry32(hashSeed(seed));
	}

	/** Returns a float in [0, 1). */
	random(): number {
		return this.nextFloat();
	}

	/** Returns a non-negative integer. */
	natural(max = 2147483647): number {
		return Math.floor(this.random() * (max + 1));
	}

	/** Returns a random alphanumeric string of given length. */
	string(length = 16): string {
		const chars =
			'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
		let result = '';
		for (let i = 0; i < length; i++) {
			result += chars[this.natural(chars.length - 1)];
		}
		return result;
	}
}

export default class RandomBuilder {
	rng: SeededRng;
	constructor({ seed }: { seed: string }) {
		this.rng = new SeededRng(seed);
	}

	random() {
		return this.rng.natural();
	}
}
