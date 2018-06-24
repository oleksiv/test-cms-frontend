import {Post} from '../../../contracts/post';
import {Component, OnInit} from '@angular/core';
import {PostService} from '../../../services/post/post.service';

@Component({
  selector: 'app-post-index',
  templateUrl: './post-index.component.html',
  styleUrls: ['./post-index.component.css']
})
export class PostIndexComponent implements OnInit {
  posts: Post[];
  total_posts: number;
  current_page = 1;
  page_limit = 10;

  constructor(protected postService: PostService) {
  }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.all(this.current_page, this.page_limit).subscribe((value: { total_posts: number, data: Post[] }) => {
      this.posts = value.data;
      this.total_posts = value.total_posts;
    });
  }

}
