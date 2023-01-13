import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {MatLegacyListModule as MatListModule} from '@angular/material/legacy-list';
import {MatLegacyTableModule as MatTableModule} from '@angular/material/legacy-table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {AngularFireModule} from '@angular/fire';

import {environment} from '../environments/environment';

import {AppRoutingModule} from './app-routing.module';
import {CustomErrorHandler} from './config/custom-error-handler';
import {AppComponent} from './app.component';
import {ErrorListComponent} from './pages/error-list/error-list.component';

@NgModule({
	declarations: [
		AppComponent,
		ErrorListComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,

		// Firebase
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		BrowserAnimationsModule,

		// Material
		MatCardModule,
		MatListModule,
		MatTableModule,
		MatToolbarModule,
	],
	providers: [
		{provide: ErrorHandler, useClass: CustomErrorHandler}
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
