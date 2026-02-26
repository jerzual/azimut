/**
 * Smooth elevation-based color gradient for terrain rendering.
 * Each stop is [elevation threshold, R, G, B].
 */
export const ELEVATION_STOPS: [number, number, number, number][] = [
	[0.0, 0x2d, 0x5a, 0x3d], // deep water / swamp — dark teal
	[0.15, 0xc2, 0xb2, 0x80], // sand / desert — sandy tan
	[0.3, 0x6a, 0xaa, 0x5b], // lowlands / country — green
	[0.45, 0xa0, 0x88, 0x50], // plains — earthy brown
	[0.6, 0x8a, 0x7a, 0x6a], // hills — gray-brown
	[0.75, 0x60, 0x60, 0x60], // highlands — dark gray
	[0.9, 0xc0, 0xc0, 0xc0], // peaks — light gray
];

/**
 * Returns an interpolated RGB color for a given elevation (0–1).
 * Lerps between neighboring color stops for smooth transitions.
 */
export function elevationToRgb(elevation: number): [number, number, number] {
	const e = Math.max(0, Math.min(1, elevation));

	// Find the two surrounding stops
	for (let i = 1; i < ELEVATION_STOPS.length; i++) {
		const [eMax, r1, g1, b1] = ELEVATION_STOPS[i];
		if (e <= eMax) {
			const [eMin, r0, g0, b0] = ELEVATION_STOPS[i - 1];
			const t = (e - eMin) / (eMax - eMin);
			return [
				Math.round(r0 + t * (r1 - r0)),
				Math.round(g0 + t * (g1 - g0)),
				Math.round(b0 + t * (b1 - b0)),
			];
		}
	}

	// Above last stop — return last color
	const last = ELEVATION_STOPS[ELEVATION_STOPS.length - 1];
	return [last[1], last[2], last[3]];
}
