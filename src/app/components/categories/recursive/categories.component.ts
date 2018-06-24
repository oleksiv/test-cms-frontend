import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recursive-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class RecursiveCategoriesComponent implements OnInit {
  @Input() posts;
  @Input() depth;
  constructor() { }

  ngOnInit() {
  }

}
