import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';

import { WidgetComponent } from './widget.component';

describe('WidgetComponent', () => {
	let component: WidgetComponent;
	let fixture: ComponentFixture<WidgetComponent>;

	beforeEach(() => {
		TestBed.createComponent(WidgetComponent);
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(WidgetComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
