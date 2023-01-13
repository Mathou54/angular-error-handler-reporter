import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {MatLegacyListModule as MatListModule} from '@angular/material/legacy-list';
import {MatLegacyTableModule as MatTableModule} from '@angular/material/legacy-table';
import {MatToolbarModule} from '@angular/material/toolbar';

import {environment} from '../environments/environment';

import {AppRoutingModule} from './app-routing.module';
import {CustomErrorHandler} from './config/custom-error-handler';
import {AppComponent} from './app.component';
import {ErrorListComponent} from './pages/error-list/error-list.component';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {AngularFireAnalyticsModule} from '@angular/fire/compat/analytics';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';

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
		// provideFirebaseApp(() => initializeApp(environment.firebase)),
		AngularFirestoreModule,
		// provideFirestore(() => getFirestore()),
		AngularFireAnalyticsModule,

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
