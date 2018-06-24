import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-parent-category',
  templateUrl: './parent-category.component.html',
  styleUrls: ['./parent-category.component.css']
})
export class ParentCategoryComponent implements OnInit {
  @Input() form: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
