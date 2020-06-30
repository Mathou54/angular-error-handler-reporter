import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {initializeTestApp} from '@firebase/testing';

describe('AppComponent', () => {
	beforeEach(async(() => {
		// initializeTestApp({ projectId: 'test'});
		// window.firebase = {
		// 	analytics: jasmine.createSpyObj('firebase.analytics.Analytics', ['logEvent'])
		// };
		spyOn(window.firebase.analytics, 'logEvent');

		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule
			],
			declarations: [
				AppComponent
			],
		}).compileComponents();
	}));

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});
});
