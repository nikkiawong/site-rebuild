import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PostService {
  posts: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.posts = database.list('posts');
  }

  getPosts() {
    return this.posts;
  }

  // getPostById(postId: number){
  //   for (var i = 0; i <= ALBUMS.length - 1; i++) {
  //     if (ALBUMS[i].id === albumId) {
  //       return ALBUMS[i];
  //     }
  //   }
  // }
}
