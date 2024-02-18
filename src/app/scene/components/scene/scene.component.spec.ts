import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { SceneComponent } from './scene.component';

describe('SceneComponent', () => {
	let component: SceneComponent;
	let fixture: ComponentFixture<SceneComponent>;

	beforeEach(() => {
		fixture = TestBed.createComponent(SceneComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
