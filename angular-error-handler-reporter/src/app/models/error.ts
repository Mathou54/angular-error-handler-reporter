export class Error {
  public date: string;
  public text: string;
  public stack: string;

  public constructor(date: string = undefined, text: string = undefined, stack: string = undefined) {
    this.date = date;
    this.text = text;
    this.stack = stack;
  }
}
