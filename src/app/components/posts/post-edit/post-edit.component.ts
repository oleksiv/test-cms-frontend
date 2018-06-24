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
      post_title: new FormControl(),
      post_content: new FormControl(),
      post_excerpt: new FormControl(),
      post_alias: new FormControl(),
      post_image: new FormControl(),
      post_status: new FormControl(),
    });
  }

  /**
   * Fetch data
   */
  ngOnInit() {
    this.postService.get(this.route.snapshot.params.id).subscribe((value: Post) => {
      this.form.setControl('post_title', new FormControl(value.post_title));
      this.form.setControl('post_content', new FormControl(value.post_content));
      this.form.setControl('post_excerpt', new FormControl(value.post_excerpt));
      this.form.setControl('post_alias', new FormControl(value.post_alias));
      this.form.setControl('post_image', new FormControl(value.post_image));
      this.form.setControl('post_status', new FormControl(value.post_status));
      this.child.render(value.post_image);
    });
  }

  /**
   * @param {FormGroup} form
   * @param status
   */
  update(form: FormGroup, status) {
    form.controls['post_status'].patchValue(status);
    this.postService.update(form.value, this.route.snapshot.params.id).subscribe((value: Post) => {
      this.form.setControl('post_alias', new FormControl(value.post_alias));
      // Disable permalink editable
      this.permalinkEditable = false;
    }, (error: HttpErrorResponse) => {
      this.form.controls['post_title'].setErrors(error.error.messages.post_title);
      this.form.controls['post_image'].setErrors(error.error.messages.post_image);
      this.form.controls['post_status'].setErrors(error.error.messages.post_status);
      this.form.controls['post_alias'].setErrors(error.error.messages.post_alias);
    });
  }
}