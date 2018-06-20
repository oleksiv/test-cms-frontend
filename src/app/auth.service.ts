import {Injectable} from '@angular/core';
import {User} from "./User";
import {HttpClient} from "@angular/common/http";
import {JwtHelperService} from '@auth0/angular-jwt';
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public jwtHelper: JwtHelperService, private http: HttpClient) {
  }

  /**
   * Logout
   */
  public logout(): void {
    localStorage.removeItem('access_token');
    return;
  }

  /**
   * Login
   * @param {string} email
   * @param {string} password
   * @returns {Observable}
   */
  public login(email: string, password: string) {
    return this.http.post<{token: string}>('/api/login_check', {
      _username: email,
      _password: password
    });
  }

  /**
   * Check whether the user is authenticated
   * @returns {boolean}
   */
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  /**
   * Get username
   * @returns {string}
   */
  public getUsername(): string  {
    const token = localStorage.getItem('access_token');
    const data = this.jwtHelper.decodeToken(token);
    return data.username;
  }
}
