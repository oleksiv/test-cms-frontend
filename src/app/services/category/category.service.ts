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

  all(options) {
    let params = new HttpParams();
    if (options.page) {
      params = params.append('page', options.page);
    }
    if (options.limit) {
      params = params.append('limit', options.limit);
    }
    if (options.parent_id) {
      params = params.append('parent_id', options.parent_id);
    }
    if (options.flat) {
      params = params.append('flat', options.flat);
    }
    return this.http.get('/api/categories', {params: params});
  }
}
