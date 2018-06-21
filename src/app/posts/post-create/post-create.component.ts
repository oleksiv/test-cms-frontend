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

  constructor(private http: HttpClient, private postService: PostService, private router: Router) {
  }

  /**
   * Get categories list
   * Show post tree data
   */
  ngOnInit() {
    this.form = new FormGroup({
      post_title: new FormControl('tyerty'),
      post_content: new FormControl('eertyert'),
      post_excerpt: new FormControl('ertyerty'),
      post_alias: new FormControl('retyerty'),
      post_image: new FormControl('ertyerty'),
      post_status: new FormControl('draft'),
    });
  }

  save(form: FormGroup, status) {
    form.controls['post_status'].patchValue(status);
    this.postService.store(form.value).subscribe((value: { data: { id: number } }) => {
      this.router.navigate(['posts', value.data.id, 'edit']);
    }, (error: HttpErrorResponse) => {
      this.form.controls['post_title'].setErrors(error.error.messages.post_title);
      this.form.controls['post_alias'].setErrors(error.error.messages.post_alias);
    });
  }

}
