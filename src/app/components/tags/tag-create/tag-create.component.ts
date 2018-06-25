import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Post} from '../../../contracts/post';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {CategoryService} from '../../../services/category/category.service';
import {TagService} from '../../../services/tag/tag.service';

@Component({
  selector: 'app-tag-create',
  templateUrl: './tag-create.component.html',
  styleUrls: ['./tag-create.component.css']
})
export class TagCreateComponent implements OnInit {
  form: FormGroup;

  constructor(private http: HttpClient, private tagService: TagService, private router: Router) {
    this.form = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
      alias: new FormControl(),
      status: new FormControl('draft'),
    });
  }

  ngOnInit() {
  }

  create(form: FormGroup) {
    this.tagService.create(form.value).subscribe((value: Post) => {
      this.router.navigate(['tags', value.id, 'edit']);
    }, (error: HttpErrorResponse) => {
      this.form.controls['title'].setErrors(error.error.messages.title);
      this.form.controls['content'].setErrors(error.error.messages.content);
      this.form.controls['alias'].setErrors(error.error.messages.alias);
      this.form.controls['status'].setErrors(error.error.messages.status);
    });
  }
}
