import {Router} from '@angular/router';
import {Post} from '../../../contracts/post';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PostService} from '../../../services/post/post.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {CategoryService} from '../../../services/category/category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  form: FormGroup;

  constructor(private http: HttpClient, private categoryService: CategoryService, private router: Router) {
  }

  /**
   * Get categories list
   * Show post tree data
   */
  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
      alias: new FormControl(),
      image: new FormControl(),
      parent: new FormControl(),
      status: new FormControl('draft'),
    });
  }

  create(form: FormGroup, status) {
    this.categoryService.create(form.value).subscribe((value: Post) => {
      this.router.navigate(['categories', value.id, 'edit']);
    }, (error: HttpErrorResponse) => {
      this.form.controls['title'].setErrors(error.error.messages.title);
      this.form.controls['content'].setErrors(error.error.messages.content);
      this.form.controls['alias'].setErrors(error.error.messages.alias);
      this.form.controls['image'].setErrors(error.error.messages.image);
      this.form.controls['parent'].setErrors(error.error.messages.parent);
      this.form.controls['status'].setErrors(error.error.messages.status);
    });
  }

}
