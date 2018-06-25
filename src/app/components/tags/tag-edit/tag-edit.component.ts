import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Post} from '../../../contracts/post';
import {TagService} from '../../../services/tag/tag.service';
import {Category} from '../../../contracts/category';

@Component({
  selector: 'app-tag-edit',
  templateUrl: './tag-edit.component.html',
  styleUrls: ['./tag-edit.component.css']
})
export class TagEditComponent implements OnInit {
  form: FormGroup;

  constructor(private http: HttpClient, private tagService: TagService, private router: Router, private route: ActivatedRoute) {
    this.form = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
      alias: new FormControl(),
      status: new FormControl('draft'),
    });
  }

  ngOnInit() {
    this.tagService.get(this.route.snapshot.params.id).subscribe((value: Category) => {
      this.form.setValue({
        title: value.title,
        content: value.content,
        alias: value.alias,
        status: value.status,
      });
    });
  }

  update(form: FormGroup) {
    this.tagService.update(form.value, this.route.snapshot.params.id).subscribe((value: Category) => {
      this.form.setValue({
        title: value.title,
        content: value.content,
        alias: value.alias,
        status: value.status,
      });
    }, (error: HttpErrorResponse) => {
      if (error.error.messages) {
        this.form.controls['title'].setErrors(error.error.messages.title);
        this.form.controls['status'].setErrors(error.error.messages.status);
        this.form.controls['alias'].setErrors(error.error.messages.alias);
      }
    });
  }

}
