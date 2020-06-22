import {Component, OnInit} from '@angular/core';

import {Error} from '../../models/error';

@Component({
  selector: 'app-error-list',
  templateUrl: './error-list.component.html',
  styleUrls: ['./error-list.component.scss']
})
export class ErrorListComponent implements OnInit {

  public errors: Error[];

  public errorsRowDef: string[];

  constructor() {
    this.errorsRowDef = ['date', 'text'];
  }

  ngOnInit(): void {
    this.errors = [{
      date: '2020-06-22T10:47:48.207Z',
      text: 'text',
      stack: ''
    }, {
      date: '2019-06-22T10:47:48.207Z',
      text: 'text2',
      stack: ''
    }, {
      date: '2018-06-22T10:47:48.207Z',
      text: 'text3',
      stack: ''
    }];
  }

}
