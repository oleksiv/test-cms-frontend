import {Tag} from '../../../contracts/tag';
import {Component, OnInit} from '@angular/core';
import {TagService} from '../../../services/tag/tag.service';

@Component({
  selector: 'app-tags-index',
  templateUrl: './tags-index.component.html',
  styleUrls: ['./tags-index.component.css']
})
export class TagsIndexComponent implements OnInit {
  posts: Tag[];
  total_posts: number;
  current_page = 1;
  page_limit = 10;

  constructor(protected tagService: TagService) {
  }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.tagService.all({
      page: this.current_page,
      limit: this.page_limit
    }).subscribe((value: { total_posts: number, data: Tag[] }) => {
      this.posts = value.data;
      this.total_posts = value.total_posts;
    });
  }

}
