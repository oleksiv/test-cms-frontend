import {Post} from '../../../contracts/post';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Component, OnInit, ViewChild} from '@angular/core';
import {PostService} from '../../../services/post/post.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {FeaturedImageWidgetComponent} from '../../shared/featured-image-widget/featured-image-widget.component';
import {Category} from '../../../contracts/category';
import {Tag} from '../../../contracts/tag';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  public form: FormGroup;
  @ViewChild(FeaturedImageWidgetComponent) child: FeaturedImageWidgetComponent;

  /**
   * @param {HttpClient} http
   * @param {PostService} postService
   * @param {Router} router
   * @param {ActivatedRoute} route
   */
  constructor(private http: HttpClient, private postService: PostService, private router: Router, private route: ActivatedRoute) {
    this.form = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
      excerpt: new FormControl(),
      alias: new FormControl(),
      image: new FormControl(),
      status: new FormControl(),
      categories: new FormControl(),
      default_category: new FormControl(),
      tags: new FormControl(),
    });
  }

  /**
   * Fetch data
   */
  ngOnInit() {
    this.postService.get(this.route.snapshot.params.id).subscribe((value: Post) => {
      this.form.setValue({
        title: value.title,
        content: value.content,
        excerpt: value.excerpt,
        alias: value.alias,
        image: value.image,
        status: value.status,
        tags: value.tags,
        categories: value.categories.map((cat: Category) => {
          return cat.id;
        }),
        default_category: value.default_category ? value.default_category.id : null
      });

      this.child.render(value.image);
    });
  }

  /**
   * @param {FormGroup} form
   */
  update(form: FormGroup) {
    // Flatten tags
    const _form = form.value;
    _form.tags = form.value.tags.map((tag: Tag) => {
      return tag.id;
    });
    this.postService.update(_form, this.route.snapshot.params.id).subscribe((value: Post) => {
      this.form.setValue({
        title: value.title,
        content: value.content,
        excerpt: value.excerpt,
        alias: value.alias,
        image: value.image,
        status: value.status,
        tags: value.tags,
        categories: value.categories.map((cat: Category) => {
          return cat.id;
        }),
        default_category: value.default_category ? value.default_category.id : null
      });
      // Disable permalink editable
    }, (error: HttpErrorResponse) => {
      this.form.controls['title'].setErrors(error.error.messages.title);
      this.form.controls['content'].setErrors(error.error.messages.content);
      this.form.controls['excerpt'].setErrors(error.error.messages.excerpt);
      this.form.controls['alias'].setErrors(error.error.messages.alias);
      this.form.controls['image'].setErrors(error.error.messages.image);
      this.form.controls['status'].setErrors(error.error.messages.status);
      this.form.controls['default_category'].setErrors(error.error.messages.default_category);
    });
  }
}
