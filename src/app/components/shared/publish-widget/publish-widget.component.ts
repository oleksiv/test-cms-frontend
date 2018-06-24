import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-publish-widget',
  templateUrl: './publish-widget.component.html',
  styleUrls: ['./publish-widget.component.css']
})
export class PublishWidgetComponent implements OnInit {
  @Output() save = new EventEmitter();
  @Input() form: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

  create(status) {
    this.save.emit(status);
  }

}
