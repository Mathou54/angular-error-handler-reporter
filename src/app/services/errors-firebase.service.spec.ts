import {TestBed} from '@angular/core/testing';
import {ErrorsFirebaseService} from './errors-firebase.service';
import {AngularFirestore} from '@angular/fire/firestore';


describe('ErrorsFirebaseService', () => {
  let mockAngularFirestore: AngularFirestore;

  let service: ErrorsFirebaseService;

  beforeEach(() => {
    mockAngularFirestore = jasmine.createSpyObj('AngularFirestore', ['collection']);

    TestBed.configureTestingModule({
      providers: [
        {provide: AngularFirestore, useValue: mockAngularFirestore}
      ]
    });
    service = TestBed.inject(ErrorsFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
