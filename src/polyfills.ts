/**
 * Polyfills loaded before the app (see `polyfills` in angular.json).
 */
import 'zone.js';

/**
 * `crypto.randomUUID` only exists in secure contexts (https or localhost).
 * angular-three needs it, so plain http hosts (e.g. http://server:4000 in the
 * docker e2e stack) would break the 3D canvas without this fallback.
 * `crypto.getRandomValues` is available in all contexts.
 */
if (typeof crypto !== 'undefined' && !crypto.randomUUID) {
	crypto.randomUUID = () => {
		const bytes = crypto.getRandomValues(new Uint8Array(16));
		bytes[6] = (bytes[6] & 0x0f) | 0x40; // version 4
		bytes[8] = (bytes[8] & 0x3f) | 0x80; // variant 10xx
		const h = Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join(
			'',
		);
		return `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}` as ReturnType<
			Crypto['randomUUID']
		>;
	};
}
