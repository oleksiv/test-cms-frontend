import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ControlContainer, FormGroup, FormGroupName} from '@angular/forms';

@Component({
  selector: 'app-post-title',
  templateUrl: './post-title.component.html',
  styleUrls: ['./post-title.component.css'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupName  }
  ]
})
export class PostTitleComponent implements OnInit {
  @Input() form: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }
}
