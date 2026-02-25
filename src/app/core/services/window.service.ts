import { Injectable } from '@angular/core';

@Injectable()
export class WindowService {
	public navigator: Record<string, unknown> = {};
	public location: Record<string, unknown> = {};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public scrollTo(a: number, b: number) {
		return null;
	}
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public alert(str: string) {
		return;
	}
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public open(...args: unknown[]) {
		return;
	}

	public setTimeout(
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		handler: (...args: unknown[]) => void,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		timeout?: number,
	): number {
		return 0;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public clearTimeout(timeoutId: number): void {
		// stub
	}

	public setInterval(
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		handler: (...args: unknown[]) => void,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		ms?: number,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		...args: unknown[]
	): number {
		return 0;
	}
}
