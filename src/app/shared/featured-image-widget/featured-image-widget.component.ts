import {Component, Input, OnInit} from '@angular/core';
import {ImageService} from '../../image.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Image} from '../../image';

@Component({
  selector: 'app-featured-image-widget',
  templateUrl: './featured-image-widget.component.html',
  styleUrls: ['./featured-image-widget.component.css']
})
export class FeaturedImageWidgetComponent implements OnInit {
  @Input() form: FormGroup;
  post_image: string;

  constructor(private imageService: ImageService) {
  }

  ngOnInit() {
    console.log(this.form.controls['post_image'].value);
  }

  onFileChanged(event) {
    console.log(this.form);

    const image = event.target.files[0];
    const uploadData = new FormData();
    uploadData.append('image_path', image, image.name);
    this.imageService.create(uploadData).subscribe((value: { data: Image }) => {
      const entity = value.data;
      this.form.setControl('post_image', new FormControl(entity.id));
      this.post_image = entity.image_path;
    });
  }

  removeImage() {
    this.form.controls['post_image'].setValue(null);
  }

}
