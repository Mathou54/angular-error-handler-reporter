import {ErrorHandler, Injectable} from '@angular/core';
import {ErrorsFirebaseService} from '../services/errors-firebase.service';

@Injectable({
  providedIn: 'root'
})
export class CustomErrorHandler extends ErrorHandler {

  constructor(private errorsFirebaseService: ErrorsFirebaseService) {
    super();
  }


  handleError(error: any) {
    super.handleError(error);

    this.errorsFirebaseService.add({
      date: new Date().toISOString(),
      text: error.message,
      stack: error.stack
    });
  }
}
