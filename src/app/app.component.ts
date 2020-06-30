import {Component} from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/analytics';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	constructor() {
		firebase.analytics().logEvent('application_start');
	}


	public makeAnError(): void {
		// @ts-ignore
		const errorVariable = undefined.crash;
	}
}
