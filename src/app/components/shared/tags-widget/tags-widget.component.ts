import {Component, Input, OnInit} from '@angular/core';
import {Tag} from '../../../contracts/tag';
import {TagService} from '../../../services/tag/tag.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-tags-widget',
  templateUrl: './tags-widget.component.html',
  styleUrls: ['./tags-widget.component.css']
})
export class TagsWidgetComponent implements OnInit {
  @Input() form: FormGroup;
  tagInput: string;
  constructor(private tagService: TagService) {
  }

  ngOnInit() {
    console.log(this.form.controls['tags'].value);
  }

  create(title) {
    this.tagService.create({
      title: title,
      status: 'published',
    }).subscribe((value) => {
      this.form.get('tags').value.push(value);
      this.tagInput = null;
    });
  }

  remove(tag) {
    const index: number = this.form.get('tags').value.indexOf(tag);
    if (index !== -1) {
      this.form.get('tags').value.splice(index, 1);
    }
  }
}
