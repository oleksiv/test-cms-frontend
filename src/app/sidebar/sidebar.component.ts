import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(protected auth: AuthService, protected router: Router) {
  }

  ngOnInit() {
  }

  logout(event) {
    event.preventDefault();
    event.stopPropagation();
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }

  getUsername() {
    return this.auth.getUsername();
  }
}
