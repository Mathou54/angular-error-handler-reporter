import {ErrorHandler, Injectable} from '@angular/core';
import {Error} from '../models/error';
import {ErrorsFirebaseService} from '../services/errors-firebase.service';

@Injectable({
  providedIn: 'root'
})
export class CustomErrorHandler extends ErrorHandler {

  private readonly sessionErrors: Error[];

  constructor(private errorsFirebaseService: ErrorsFirebaseService) {
    super();

    this.sessionErrors = [];
  }


  public handleError(error: any): void {
    super.handleError(error);

    const newError = {
      date: new Date().toISOString(),
      text: error.message,
      stack: error.stack
    };

    if (this.doNotContainError(newError, this.sessionErrors)) {
      this.errorsFirebaseService.add(newError);
      this.sessionErrors.push(newError);
    }
  }

  private doNotContainError(newError: Error, sessionErrors: Error[]): boolean {
    return sessionErrors.map(value => value.stack)
      .filter(value => value === newError.stack)
      .length <= 0;
  }
}
