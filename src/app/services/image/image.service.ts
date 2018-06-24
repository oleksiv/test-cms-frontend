import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) {
  }

  create(image) {
    return this.http.post('/api/images', image);
  }

  get(image: number) {
    return this.http.get('/api/images/' + image);
  }
}
