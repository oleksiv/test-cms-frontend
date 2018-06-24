import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  create(data) {
    return this.http.post('/api/categories', data);
  }

  update(data, id) {
    return this.http.put('/api/categories/' + id, data);
  }

  get(id) {
    return this.http.get('/api/categories/' + id);
  }

  all(page, limit) {
    const options = {params: new HttpParams().set('page', page).set('limit', limit)};
    return this.http.get('/api/categories', options);
  }
}
