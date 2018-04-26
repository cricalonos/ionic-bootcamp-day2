import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostsProvider } from '../../providers/posts/posts';
import { Post } from '../../models/post.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  postsList: Observable<Post[]>;

  constructor(public navCtrl: NavController, private postsProvider: PostsProvider) {
    this.postsList = postsProvider.getPots();
  }

  detailPost(post: Post): void {
    this.navCtrl.push('DetailPage', { post });
  }

}
