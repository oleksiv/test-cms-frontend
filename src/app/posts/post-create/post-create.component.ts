import {Component, OnInit} from '@angular/core';
import {Post} from '../post';
import {FormArray, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {PostService} from '../../post.service';
import {Router} from '@angular/router';
import {ValidationErrors} from '@angular/forms/src/directives/validators';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  form: FormGroup;
  currentUrl = window.location.origin;

  constructor(private http: HttpClient, private postService: PostService, private router: Router) {
  }

  /**
   * Get categories list
   * Show post tree data
   */
  ngOnInit() {
    // This can be done a lot prettier; for example automatically assigning values by looping through `this.form.controls`,
    // but we'll keep it as simple as possible here
    this.form = new FormGroup({
      post_title: new FormControl(),
      post_content: new FormControl(),
      post_excerpt: new FormControl(),
      post_alias: new FormControl(),
      post_image: new FormControl(),
      post_status: new FormControl('draft'),
    });
  }

  create(form: FormGroup, status) {
    form.controls['post_status'].patchValue(status);
    this.postService.create(form.value).subscribe((value: { data: Post }) => {
      this.router.navigate(['posts', value.data.id, 'edit']);
    }, (error: HttpErrorResponse) => {
      this.form.controls['post_title'].setErrors(error.error.messages.post_title);
      this.form.controls['post_content'].setErrors(error.error.messages.post_content);
      this.form.controls['post_excerpt'].setErrors(error.error.messages.post_excerpt);
      this.form.controls['post_alias'].setErrors(error.error.messages.post_alias);
      this.form.controls['post_image'].setErrors(error.error.messages.post_image);
      this.form.controls['post_status'].setErrors(error.error.messages.post_status);
    });
  }

}
