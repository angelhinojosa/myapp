import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private authFire: AngularFireAuth
  ) { }

  login(email: string, password: string) {
    return this.authFire.signInWithEmailAndPassword(email, password);
  }

  register(email: string, password: string) {
    return this.authFire.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    return this.authFire.signOut();
  }

  hasSession(): Observable<boolean> {
    return this.authFire.authState
    .pipe(
      // Guardar en el LOCALSTORAGE
      // tap(user => {
      //   if (user) {
      //     localStorage.setItem('currentUser', JSON.stringify(user));
      //     const currentUser = localStorage.getItem('currentUser');
      //     const original = JSON.parse(currentUser);
      //   }
      // }),
      map(user => user === null ? false : true),
    );
  }
}