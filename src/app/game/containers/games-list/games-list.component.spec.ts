import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';

import { GamesListComponent } from './games-list.component';

describe('GamesListComponent', () => {
	let component: GamesListComponent;
	let fixture: ComponentFixture<GamesListComponent>;

	beforeEach(() => {
		fixture = TestBed.createComponent(GamesListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
