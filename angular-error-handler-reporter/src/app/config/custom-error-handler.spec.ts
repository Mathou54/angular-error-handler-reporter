import {CustomErrorHandler} from './custom-error-handler';
import {ErrorsFirebaseService} from '../services/errors-firebase.service';

describe('CustomErrorHandler', () => {
  let mockErrorsFirebaseService: ErrorsFirebaseService;

  let customErrorHandler: CustomErrorHandler;

  beforeEach(() => {
    mockErrorsFirebaseService = jasmine.createSpyObj('ErrorsFirebaseService', ['add']);

    customErrorHandler = new CustomErrorHandler(mockErrorsFirebaseService);
  });

  it('should create an instance', () => {
    expect(customErrorHandler).toBeTruthy();
  });

  it('should handle a new error', () => {
    customErrorHandler.handleError({
      message: 'text',
      stack: 'stack'
    });

    expect(mockErrorsFirebaseService.add).toHaveBeenCalledTimes(1);
    expect(mockErrorsFirebaseService.add).toHaveBeenCalledWith(jasmine.objectContaining({
      date: jasmine.any(String),
      text: 'text',
      stack: 'stack'
    }));
  });

  it('should handle an old error', () => {
    customErrorHandler.handleError({
      message: 'text',
      stack: 'stack'
    });
    customErrorHandler.handleError({
      message: 'text',
      stack: 'stack'
    });

    expect(mockErrorsFirebaseService.add).toHaveBeenCalledTimes(1);
  });

  it('should handle 2 errors', () => {
    customErrorHandler.handleError({
      message: 'text',
      stack: 'stack'
    });
    customErrorHandler.handleError({
      message: 'text2',
      stack: 'stack2'
    });

    expect(mockErrorsFirebaseService.add).toHaveBeenCalledTimes(2);
  });
});
