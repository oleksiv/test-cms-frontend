import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient) {
  }

  create(data) {
    return this.http.post('/api/tags', data);
  }

  update(data, id) {
    return this.http.put('/api/tags/' + id, data);
  }

  get(id) {
    return this.http.get('/api/tags/' + id);
  }

  all(options) {
    let params = new HttpParams();
    if (options.page) {
      params = params.append('page', options.page);
    }
    if (options.limit) {
      params = params.append('limit', options.limit);
    }
    return this.http.get('/api/tags', {params: params});
  }
}
