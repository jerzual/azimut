import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRootComponent } from './admin-root.component';

describe('AdminRootComponent', () => {
	let component: AdminRootComponent;
	let fixture: ComponentFixture<AdminRootComponent>;

	beforeEach(() => {
		fixture = TestBed.createComponent(AdminRootComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
