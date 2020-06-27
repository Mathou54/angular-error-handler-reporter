export class Error {
  public date: string;
  public text: string;
  public stack: string;

  public constructor(date?: string, text?: string, stack?: string) {
    this.date = date;
    this.text = text;
    this.stack = stack;
  }
}
