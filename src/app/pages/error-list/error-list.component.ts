import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Observable} from 'rxjs';
import {Error} from '../../models/error';
import {ErrorsFirebaseService} from '../../services/errors-firebase.service';

@Component({
	selector: 'app-error-list',
	templateUrl: './error-list.component.html',
	styleUrls: ['./error-list.component.scss'],
	animations: [
		trigger('detailExpand', [
			state('collapsed', style({height: '0px', minHeight: '0'})),
			state('expanded', style({height: '*'})),
			transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
		]),
	],
})
export class ErrorListComponent implements OnInit {

	public errors: Observable<Error[]>;

	public errorsRowDef: string[];
	public expandedError: Error | null;

	constructor(private errorsFirebaseService: ErrorsFirebaseService) {
		this.errorsRowDef = ['date', 'text'];
	}

	ngOnInit(): void {
		this.errors = this.errorsFirebaseService.getAll();
	}

}
