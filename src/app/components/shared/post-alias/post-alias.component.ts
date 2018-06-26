import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Post} from '../../../contracts/post';

@Component({
  selector: 'app-post-alias',
  templateUrl: './post-alias.component.html',
  styleUrls: ['./post-alias.component.css']
})
export class PostAliasComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() post: Post;
  @Input() type: string;
  permalinkEditable = false;
  currentUrl = window.location.origin;

  constructor() {
  }

  ngOnInit() {
  }

}
