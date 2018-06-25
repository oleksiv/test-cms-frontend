import {Router} from '@angular/router';
import {Post} from '../../../contracts/post';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PostService} from '../../../services/post/post.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Tag} from '../../../contracts/tag';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  public form: FormGroup;

  constructor(private http: HttpClient, private postService: PostService, private router: Router) {
    this.form = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
      excerpt: new FormControl(),
      alias: new FormControl(),
      image: new FormControl(),
      status: new FormControl('draft'),
      categories: new FormControl([]),
      default_category: new FormControl(),
      tags: new FormControl([]),
    });
  }

  /**
   * Get categories list
   * Show post tree data
   */
  ngOnInit() {
  }

  create(form: FormGroup) {
    // Flatten tags
    const _form = form.value;
    _form.tags = form.value.tags.map((tag: Tag) => {
      return tag.id;
    });
    this.postService.create(_form).subscribe((value: Post) => {
      this.router.navigate(['posts', value.id, 'edit']);
    }, (error: HttpErrorResponse) => {
      // This can be done a lot prettier; for example automatically assigning values by looping through `this.form.controls`,
      // but we'll keep it as simple as possible here
      this.form.controls['title'].setErrors(error.error.messages.title);
      this.form.controls['content'].setErrors(error.error.messages.content);
      this.form.controls['excerpt'].setErrors(error.error.messages.excerpt);
      this.form.controls['alias'].setErrors(error.error.messages.alias);
      this.form.controls['image'].setErrors(error.error.messages.image);
      this.form.controls['status'].setErrors(error.error.messages.status);
    });
  }

}
