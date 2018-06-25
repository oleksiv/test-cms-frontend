import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from '../../../services/category/category.service';
import {Category} from '../../../contracts/category';
import {FormArray, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-categories-widget',
  templateUrl: './categories-widget.component.html',
  styleUrls: ['./categories-widget.component.css']
})
export class CategoriesWidgetComponent implements OnInit {
  @Input() form: FormGroup;
  categories: Category[];
  total_categories: number;
  current_page = 1;
  page_limit = 10;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.load();
  }

  load() {
    this.categoryService.all({
      limit: this.page_limit,
      page: this.current_page,
      flat: 2
    }).subscribe((value: { total_categories: number, data: Category[] }) => {
      this.categories = value.data;
      this.total_categories = value.total_categories;
    });
  }

}
