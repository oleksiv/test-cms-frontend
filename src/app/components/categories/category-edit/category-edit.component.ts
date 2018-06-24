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
  @ViewChild(FeaturedImageWidgetComponent) child: FeaturedImageWidgetComponent;

  /**
   * @param {HttpClient} http
   * @param {PostService} categoryService
   * @param {Router} router
   * @param {ActivatedRoute} route
   */
  constructor(private http: HttpClient, private categoryService: CategoryService, private router: Router, private route: ActivatedRoute) {
    this.form = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
      alias: new FormControl(),
      image: new FormControl(),
    });
  }

  /**
   * Init form
   */
  ngOnInit() {
    this.categoryService.get(this.route.snapshot.params.id).subscribe((value: Category) => {
      this.form.setValue({
        title: value.title,
        content: value.content,
        alias: value.alias,
        image: value.image,
      });
      this.child.render(value.image);
    });
  }

  /**
   * @param {FormGroup} form
   * @param status
   */
  update(form: FormGroup, status) {
    // form.setValue({
    //   status: status,
    // });
    this.categoryService.update(form.value, this.route.snapshot.params.id).subscribe((value: Post) => {
      this.form.setValue({
        title: value.title,
        content: value.content,
        alias: value.alias,
        image: value.image,
      });
      // Disable permalink editable
      this.permalinkEditable = false;
    }, (error: HttpErrorResponse) => {
      if (error.error.messages) {
        this.form.controls['title'].setErrors(error.error.messages.title);
        this.form.controls['image'].setErrors(error.error.messages.image);
        this.form.controls['status'].setErrors(error.error.messages.status);
        this.form.controls['alias'].setErrors(error.error.messages.alias);
      }
    });
  }
}
