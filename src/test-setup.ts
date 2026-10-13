/**
 * Setup file for `ng test` (see `setupFiles` in angular.json).
 * The TestBed environment is initialized by `@angular/build:unit-test`.
 */

// ResizeObserver is not implemented in jsdom (used by ngxtension resize)
class ResizeObserverMock implements ResizeObserver {
	observe(): void {
		// noop
	}
	unobserve(): void {
		// noop
	}
	disconnect(): void {
		// noop
	}
}

if (typeof window.ResizeObserver === 'undefined') {
	Object.defineProperty(window, 'ResizeObserver', {
		writable: true,
		configurable: true,
		value: ResizeObserverMock,
	});
}
