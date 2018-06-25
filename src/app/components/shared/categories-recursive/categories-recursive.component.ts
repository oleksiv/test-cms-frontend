import {AfterViewChecked, Component, Input, OnInit} from '@angular/core';
import {Category} from '../../../contracts/category';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-categories-recursive',
  templateUrl: './categories-recursive.component.html',
  styleUrls: ['./categories-recursive.component.css']
})
export class CategoriesRecursiveComponent {
  @Input() form: FormGroup;
  @Input() categories: Category[];

  constructor() {
  }

  /**
   * Check is the category assigned
   * @param {Category} category
   * @returns {boolean}
   */
  categoryChecked(category: Category) {
    let found = false;
    if (this.form.get('categories')) {
      const controls = <Category[]>this.form.get('categories').value;
      if (controls) {
        controls.forEach((child: any) => {
          if (category.id === child) {
            found = true;
          }
        });
      }
    }
    return found;
  }

  /**
   * Check if the category is default
   * @param {Category} category
   * @returns {boolean}
   */
  defaultCategory(category: Category) {
    if (this.form.get('default_category')) {
      const controls = <number>this.form.controls['default_category'].value;
      return controls === category.id;
    }
    return false;
  }

  /**
   * Update categories
   * @param category
   * @param event
   */
  updateCategories(category, event: any) {
    if (this.form.get('categories')) {
      const controls = <Category[]>this.form.controls['categories'].value;
      if (event.currentTarget.checked) {
        controls.push(category.id);
      } else {
        const index: number = this.form.get('categories').value.indexOf(category.id);
        if (index !== -1) {
          this.form.get('categories').value.splice(index, 1);
        }
      }
    }
  }

  /**
   * Make category primary
   * @param {Category} category
   */
  makePrimary(category: Category) {
    if (this.form.get('default_category')) {
      this.form.get('default_category').setValue(category.id);
    }
  }
}
