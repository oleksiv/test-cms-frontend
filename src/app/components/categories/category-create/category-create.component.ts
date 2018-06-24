import {Router} from '@angular/router';
import {Post} from '../../../contracts/post';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PostService} from '../../../services/post/post.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  form: FormGroup;
  currentUrl = window.location.origin;

  constructor(private http: HttpClient, private postService: PostService, private router: Router) {
  }

  /**
   * Get categories list
   * Show post tree data
   */
  ngOnInit() {
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
    this.postService.create(form.value).subscribe((value: Post) => {
      this.router.navigate(['posts', value.id, 'edit']);
    }, (error: HttpErrorResponse) => {
      // This can be done a lot prettier; for example automatically assigning values by looping through `this.form.controls`,
      // but we'll keep it as simple as possible here
      this.form.controls['post_title'].setErrors(error.error.messages.post_title);
      this.form.controls['post_content'].setErrors(error.error.messages.post_content);
      this.form.controls['post_excerpt'].setErrors(error.error.messages.post_excerpt);
      this.form.controls['post_alias'].setErrors(error.error.messages.post_alias);
      this.form.controls['post_image'].setErrors(error.error.messages.post_image);
      this.form.controls['post_status'].setErrors(error.error.messages.post_status);
    });
  }

}
