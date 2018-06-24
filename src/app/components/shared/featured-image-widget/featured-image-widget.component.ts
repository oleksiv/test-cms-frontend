import {ActivatedRoute} from '@angular/router';
import {Image} from '../../../contracts/image';
import {FormControl, FormGroup} from '@angular/forms';
import {Component, Input, OnInit} from '@angular/core';
import {ImageService} from '../../../services/image/image.service';

@Component({
  selector: 'app-featured-image-widget',
  templateUrl: './featured-image-widget.component.html',
  styleUrls: ['./featured-image-widget.component.css']
})
export class FeaturedImageWidgetComponent implements OnInit {
  @Input() form: FormGroup;
  image: Image;

  constructor(private imageService: ImageService, protected route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  /**
   * Upload image
   * @param event
   */
  upload(event) {
    const image = event.target.files[0];
    const uploadData = new FormData();
    uploadData.append('image_path', image, image.name);
    this.imageService.create(uploadData).subscribe((value: Image) => {
      this.form.setControl('image', new FormControl(value.id));
      this.render(value.id);
    });
  }

  /**
   * Removes post image from the form
   */
  remove() {
    this.form.controls['image'].setValue(null);
    this.image = null;
  }

  /**
   * @param {number} id
   */
  render(id: number) {
    if (id) {
      this.imageService.get(id).subscribe((value: Image) => {
        this.image = value;
      });
    }
  }
}
