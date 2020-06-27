import {Injectable} from '@angular/core';
import {AngularFirestore, DocumentReference} from '@angular/fire/firestore';

import {Observable} from 'rxjs';

import {Error} from '../models/error';

@Injectable({
	providedIn: 'root'
})
export class ErrorsFirebaseService {

	public static readonly TABLE = 'errors';

	public constructor(private angularFirestore: AngularFirestore) {
	}

	public add(error: Error): Promise<DocumentReference> {
		return this.angularFirestore.collection<Error>(ErrorsFirebaseService.TABLE)
			.add(error);
	}

	public getAll(): Observable<Error[]> {
		return this.angularFirestore.collection<Error>(ErrorsFirebaseService.TABLE)
			.valueChanges();
	}
}
