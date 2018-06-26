import {Post} from '../../../contracts/post';
import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CategoryService} from '../../../services/category/category.service';
import {Category} from '../../../contracts/category';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

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
  parent_id: number;

  constructor(protected categoryService: CategoryService, protected route: ActivatedRoute, protected router: Router) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.current_page = 1;
      this.parent_id = params.parent_id;
      this.loadPosts(this.parent_id);
    });
  }

  loadPosts(parent_id) {
    this.categoryService.all({
      page: this.current_page,
      limit: this.page_limit,
      parent_id: parent_id,
      flat: 2
    }).subscribe((value: { total_categories: number, data: Category[] }) => {
      this.posts = value.data;
      this.total_posts = value.total_categories;
    });
  }
}
