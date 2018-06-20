import { Component, OnInit } from '@angular/core';
import {Post} from "../post";
import {FormArray, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {PostService} from "../../post.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  form: FormGroup;

  constructor(private http: HttpClient, private postService: PostService, private router: Router) { }

  /**
   * Get categories list
   * Show post tree data
   */
  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      status: new FormControl('archive', Validators.required),
      alias: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      tags: new FormArray([
        new FormControl('')
      ]),
      categories: new FormArray([
        new FormControl('')
      ]),
    });
  }

  save(form: NgForm, status) {
    form.controls['status'].patchValue(status);
    this.postService.store(form.value).subscribe((value: Post) => {
      this.router.navigate(['posts', 'edit', value.id]);
    }, (error) => {

    });
  }

}
