import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../../models/post.model';

@Injectable()
export class PostsProvider {

  constructor(public http: HttpClient) {

  }

  getPots() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

}
