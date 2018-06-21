import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../../post.service';
import {Post} from '../post';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  form: FormGroup;
  id: number;

  constructor(private http: HttpClient, private postService: PostService, private router: Router, private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.form = new FormGroup({
      post_title: new FormControl(''),
      post_content: new FormControl(''),
      post_excerpt: new FormControl(''),
      post_alias: new FormControl(''),
      post_image: new FormControl(''),
      post_status: new FormControl(''),
    });
    this.postService.get(this.route.snapshot.params.id).subscribe((value: { data: Post }) => {
      this.form = new FormGroup({
        post_title: new FormControl(value.data.post_title),
        post_content: new FormControl(value.data.post_content),
        post_excerpt: new FormControl(value.data.post_excerpt),
        post_alias: new FormControl(value.data.post_alias),
        post_image: new FormControl(value.data.post_image),
        post_status: new FormControl(value.data.post_status),
      });
    });
  }

}
