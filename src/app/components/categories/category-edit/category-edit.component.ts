import {Post} from '../../../contracts/post';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Component, OnInit, ViewChild} from '@angular/core';
import {PostService} from '../../../services/post/post.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {FeaturedImageWidgetComponent} from '../../shared/featured-image-widget/featured-image-widget.component';
import {CategoryService} from '../../../services/category/category.service';
import {Category} from '../../../contracts/category';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  form: FormGroup;
  permalinkEditable = false;
  currentUrl = window.location.origin;
  @ViewChild(FeaturedImageWidgetComponent) child: FeaturedImageWidgetComponent;

  /**
   * @param {HttpClient} http
   * @param {PostService} categoryService
   * @param {Router} router
   * @param {ActivatedRoute} route
   */
  constructor(private http: HttpClient, private categoryService: CategoryService, private router: Router, private route: ActivatedRoute) {
    this.form = new FormGroup({
      post_title: new FormControl(),
      post_content: new FormControl(),
      post_alias: new FormControl(),
      post_image: new FormControl(),
    });
  }

  /**
   * Init form
   */
  ngOnInit() {
    this.categoryService.get(this.route.snapshot.params.id).subscribe((value: Category) => {
      this.form.setValue({
        post_title: value.post_title,
        post_content: value.post_content,
        post_alias: value.post_alias,
        post_image: value.post_image,
      });
      this.child.render(value.post_image);
    });
  }

  /**
   * @param {FormGroup} form
   * @param status
   */
  update(form: FormGroup, status) {
    // form.setValue({
    //   post_status: status,
    // });
    this.categoryService.update(form.value, this.route.snapshot.params.id).subscribe((value: Post) => {
      this.form.setValue({
        post_title: value.post_title,
        post_content: value.post_content,
        post_alias: value.post_alias,
        post_image: value.post_image,
      });
      // Disable permalink editable
      this.permalinkEditable = false;
    }, (error: HttpErrorResponse) => {
      if (error.error.messages) {
        this.form.controls['post_title'].setErrors(error.error.messages.post_title);
        this.form.controls['post_image'].setErrors(error.error.messages.post_image);
        this.form.controls['post_status'].setErrors(error.error.messages.post_status);
        this.form.controls['post_alias'].setErrors(error.error.messages.post_alias);
      }
    });
  }
}
