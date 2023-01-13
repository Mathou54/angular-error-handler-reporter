import { TestBed, waitForAsync } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import * as firebase from 'firebase';
import {AppComponent} from './app.component';

describe('AppComponent', () => {
	beforeEach(waitForAsync(() => {
		firebase.initializeApp({
			projectId: 'test-projectId',
			apiKey: 'test-apiKey',
			appId: 'test-appId',
			measurementId: 'test-measurementId'
		});

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
