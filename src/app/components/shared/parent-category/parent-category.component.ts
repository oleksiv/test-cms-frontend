import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Category} from '../../../contracts/category';
import {CategoryService} from '../../../services/category/category.service';

@Component({
  selector: 'app-parent-category',
  templateUrl: './parent-category.component.html',
  styleUrls: ['./parent-category.component.css']
})
export class ParentCategoryComponent implements OnInit {
  @Input() form: FormGroup;
  categories: Category[];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categoryService.all({
      flat: 1
    }).subscribe((value: { data: Category[] }) => {
      this.categories = value.data;
    });
  }

}
