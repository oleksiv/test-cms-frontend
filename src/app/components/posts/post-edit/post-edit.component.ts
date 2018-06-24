import {Post} from '../../../contracts/post';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Component, OnInit, ViewChild} from '@angular/core';
import {PostService} from '../../../services/post/post.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {FeaturedImageWidgetComponent} from '../../shared/featured-image-widget/featured-image-widget.component';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  public form: FormGroup;
  permalinkEditable = false;
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
      });
      this.child.render(value.image);
    });
  }

  /**
   * @param {FormGroup} form
   * @param status
   */
  update(form: FormGroup, status) {
    form.controls['status'].patchValue(status);
    this.postService.update(form.value, this.route.snapshot.params.id).subscribe((value: Post) => {
      this.form.setValue({
        alias: value.alias,
      });
      // Disable permalink editable
      this.permalinkEditable = false;
    }, (error: HttpErrorResponse) => {
      this.form.controls['title'].setErrors(error.error.messages.title);
      this.form.controls['image'].setErrors(error.error.messages.image);
      this.form.controls['status'].setErrors(error.error.messages.status);
      this.form.controls['alias'].setErrors(error.error.messages.alias);
    });
  }
}
