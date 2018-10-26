import { Component, OnInit, Input } from '@angular/core';
// import { RecentPost } from '../models/recentPost.model';
import { PostService } from '../post.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.css'],
  providers: [PostService]
})
export class RecentPostsComponent implements OnInit {
  posts: FirebaseListObservable<any[]>;

  constructor(private postService: PostService) {}

  ngOnInit(){
    this.posts = this.postService.getPosts();
  }

  // @Input() childNewPosts: RecentPost[];

}
