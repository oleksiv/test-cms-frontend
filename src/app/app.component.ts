import {Component} from '@angular/core';
import {AuthService} from './services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public auth: AuthService, protected router: Router) {

  }

  logout(event) {
    event.preventDefault();
    event.stopPropagation();
    this.auth.logout();
    localStorage.removeItem('access_token');
    this.router.navigateByUrl('/login');
  }

  getUsername() {
    return this.auth.getUsername();
  }

}
