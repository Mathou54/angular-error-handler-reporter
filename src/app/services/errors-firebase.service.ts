import {Injectable} from '@angular/core';
import {AngularFirestore, DocumentReference} from '@angular/fire/compat/firestore';

import 'firebase/analytics';

import {Observable} from 'rxjs';

import {Error} from '../models/error';
import {AngularFireAnalytics} from '@angular/fire/compat/analytics';

@Injectable({
	providedIn: 'root'
})
export class ErrorsFirebaseService {

	public static readonly TABLE = 'errors';

	public constructor(private analytics: AngularFireAnalytics,
						private angularFirestore: AngularFirestore) {
	}

	public add(error: Error): Promise<DocumentReference<Error>> {
		this.analytics.logEvent('errors_add');
		return this.angularFirestore.collection<Error>(ErrorsFirebaseService.TABLE)
			.add(error);
	}

	public getAll(): Observable<Error[]> {
		this.analytics.logEvent('errors_list');
		return this.angularFirestore.collection<Error>(ErrorsFirebaseService.TABLE)
			.valueChanges();
	}
}
