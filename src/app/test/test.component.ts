import {Component, OnInit} from '@angular/core';
import {TestService} from "../test.service";
import {Test} from "../Test";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [TestService]
})
export class TestComponent implements OnInit {

  test: Test;

  constructor(protected auth: AuthService, protected router: Router) {
  }

  ngOnInit() {
  }



}
