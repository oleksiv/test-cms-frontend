import {Post} from '../../../contracts/post';
import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../../services/category/category.service';
import {Category} from '../../../contracts/category';

@Component({
  selector: 'app-category-index',
  templateUrl: './category-index.component.html',
  styleUrls: ['./category-index.component.css']
})
export class CategoryIndexComponent implements OnInit {
  posts: Category[];
  total_posts: number;
  current_page = 1;
  page_limit = 10;
  options = {};

  constructor(protected categoryService: CategoryService) {
  }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.categoryService.all(this.current_page, this.page_limit).subscribe((value: { total_categories: number, data: Category[] }) => {
      this.posts = value.data;
      this.total_posts = value.total_categories;
    });
  }

}
