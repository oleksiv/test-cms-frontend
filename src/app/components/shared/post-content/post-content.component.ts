import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.css']
})
export class PostContentComponent implements OnInit {
  @Input() form: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}
