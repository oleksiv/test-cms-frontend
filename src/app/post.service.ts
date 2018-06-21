import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  create(data) {
    return this.http.post('/api/posts', data);
  }

  update(data, id) {
    return this.http.put('/api/posts/' + id, data);
  }

  get(id) {
    return this.http.get('/api/posts/' + id);
  }
}
