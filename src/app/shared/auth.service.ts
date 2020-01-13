import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) { }

  /**
   * Make the api call for the authentification.
   * Store credentials (token and email) into localstorage.
   * @param email user email
   * @param password user password
   */
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, {
      email,
      password
    }).pipe(
      tap(results => {
        if (results) {
          this.storeCredentials(results);
        }
      })
    );
  }

  /**
   * Remove token and email from localstorage.
   */
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
  }

  /**
   * Return token from local storage
   */
  getToken(): string {
    return localStorage.getItem('token');
  }

  /**
   * Store credentials in the browser local storage.
   * @param credentials javascript object which contain token and email
   */
  private storeCredentials(credentials) {
    if (credentials.token) {
      localStorage.setItem('token', credentials.token);
    }

    if (credentials.email) {
      localStorage.setItem('email', credentials.email);
    }
  }
}
