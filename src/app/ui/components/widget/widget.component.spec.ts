import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularDraggableModule } from 'angular2-draggable';

import { WidgetComponent } from './widget.component';

describe('WidgetComponent', () => {
	let component: WidgetComponent;
	let fixture: ComponentFixture<WidgetComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [WidgetComponent],
			imports: [AngularDraggableModule],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WidgetComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
