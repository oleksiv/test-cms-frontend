import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuestGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {
  }

  canActivate(): boolean {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/posts']);
      return false;
    }
    return true;
  }
}
