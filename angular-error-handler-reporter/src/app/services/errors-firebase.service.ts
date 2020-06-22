import {Injectable} from '@angular/core';
import {AngularFirestore, DocumentData, DocumentReference, QuerySnapshot} from '@angular/fire/firestore';

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
    return this.angularFirestore.collection(ErrorsFirebaseService.TABLE)
      .add(error);
  }

  public getAll(): Observable<QuerySnapshot<DocumentData>> {
    return this.angularFirestore.collection(ErrorsFirebaseService.TABLE)
      .get();
  }
}
