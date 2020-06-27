import {Component} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	constructor() {
	}


	public makeAnError(): void {
		// @ts-ignore
		const errorVariable = undefined.crash;
	}
}
