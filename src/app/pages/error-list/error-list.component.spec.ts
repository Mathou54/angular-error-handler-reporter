import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ErrorListComponent} from './error-list.component';
import {ErrorsFirebaseService} from '../../services/errors-firebase.service';

describe('ErrorListComponent', () => {
  let mockErrorsFirebaseService: ErrorsFirebaseService;

  let component: ErrorListComponent;
  let fixture: ComponentFixture<ErrorListComponent>;

  beforeEach(async(() => {
    mockErrorsFirebaseService = jasmine.createSpyObj('ErrorsFirebaseService', ['getAll']);

    TestBed.configureTestingModule({
      providers: [
        {provide: ErrorsFirebaseService, useValue: mockErrorsFirebaseService}
      ],

      declarations: [ErrorListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
