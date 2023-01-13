import {TestBed} from '@angular/core/testing';
import {ErrorsFirebaseService} from './errors-firebase.service';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {AngularFireAnalytics} from '@angular/fire/compat/analytics';


describe('ErrorsFirebaseService', () => {
	let mockAngularFirestore: AngularFirestore;
	let mockAngularFireAnalytics: AngularFireAnalytics;

	let service: ErrorsFirebaseService;

	beforeEach(() => {
		mockAngularFirestore = jasmine.createSpyObj('AngularFirestore', ['collection']);
		mockAngularFireAnalytics = jasmine.createSpyObj('AngularFireAnalytics', ['logEvent']);

		TestBed.configureTestingModule({
			providers: [
				{provide: AngularFirestore, useValue: mockAngularFirestore},
				{provide: AngularFireAnalytics, useValue: mockAngularFireAnalytics},
			]
		});
		service = TestBed.inject(ErrorsFirebaseService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
