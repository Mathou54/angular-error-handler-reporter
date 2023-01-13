import { TestBed, waitForAsync } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {provideFirebaseApp} from '@angular/fire/app';
import {AngularFireAnalytics} from '@angular/fire/compat/analytics';

describe('AppComponent', () => {
	let mockAngularFireAnalytics: AngularFireAnalytics;

	beforeEach(waitForAsync(() => {
		mockAngularFireAnalytics = jasmine.createSpyObj('AngularFireAnalytics', ['logEvent']);

		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				provideFirebaseApp(() => initializeTestApp({
					projectId: 'test-projectId'
				})),
			],
			declarations: [
				AppComponent
			],
			providers: [
				{provide: AngularFireAnalytics, useValue: mockAngularFireAnalytics},
			]
		}).compileComponents();
	}));

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});
});
function initializeTestApp(arg0: { projectId: string; }): import("@firebase/app").FirebaseApp {
    throw new Error('Function not implemented.');
}

