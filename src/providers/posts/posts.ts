import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../../models/post.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostsProvider {

  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(public http: HttpClient) {
  }

  getPots(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }

}
