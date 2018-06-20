import { Component, OnInit } from '@angular/core';
import {Post} from "../post";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      alias: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      tags: new FormControl('', Validators.required),
    });
  }

}
