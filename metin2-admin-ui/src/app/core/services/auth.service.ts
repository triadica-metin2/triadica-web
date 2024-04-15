import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(true);

  // Observable to watch authentication status
  isAuthenticated$ = this.isAuthenticated.asObservable();

  // Mock login function
  login() {
    this.isAuthenticated.next(true);
  }

  // Mock logout function
  logout() {
    this.isAuthenticated.next(false);
  }
}
