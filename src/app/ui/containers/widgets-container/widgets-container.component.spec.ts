import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';

import { WidgetsContainerComponent } from './widgets-container.component';

describe('WidgetsContainerComponent', () => {
	let component: WidgetsContainerComponent;
	let fixture: ComponentFixture<WidgetsContainerComponent>;

	beforeEach(() => {
		fixture = TestBed.createComponent(WidgetsContainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
