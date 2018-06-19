import {Injectable} from '@angular/core';
import {User} from "./User";
import {HttpClient} from "@angular/common/http";
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public jwtHelper: JwtHelperService, private http: HttpClient) {
  }

  login(email: string, password: string) {
    return this.http.post<User>('/api/login_check', {
      _username: email,
      _password: password
    });
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
