import {Component} from '@angular/core';
import {AngularFireAnalytics} from '@angular/fire/compat/analytics';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	constructor(private analytics: AngularFireAnalytics) {
		this.analytics.logEvent('application_start');
	}


	public makeAnError(): void {
		/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
		// @ts-ignore
		const errorVariable = undefined.crash;
		console.log(errorVariable);
	}
}
