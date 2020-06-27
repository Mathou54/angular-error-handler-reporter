# Angular Error Handler Reporter

This project proposes an implementation to keep track of frontend errors by saving them into a database.

## Live example
TODO

## Error handler

The [ErrorHandler](https://angular.io/api/core/ErrorHandler) subclass, [custom-error-handler.ts](src/app/config/custom-error-handler.ts),
catch every distinct error and send them to a service (here 'ErrorsFirebaseService').
The implementation of the service depends on where you want to store the errors and via which technologies.
Here in the example we use firebase storage.

```typescript
export class CustomErrorHandler extends ErrorHandler {

  private readonly sessionErrors: Error[];

  constructor(private service: ErrorsService) {
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

    if(this.doNotContainError(newError, this.sessionErrors)) {
      this.service.add(newError);
      this.sessionErrors.push(newError);
    }
  }

  private doNotContainError(newError: Error, sessionErrors: Error[]): boolean {
    return sessionErrors.map(value => value.stack)
      .filter(value => value == newError.stack)
      .length <= 0;
  }
}
```
