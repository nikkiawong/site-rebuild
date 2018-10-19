import { Component, Input } from '@angular/core';
import { RecentPost } from '../models/recentPost.model';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.css']
})
export class RecentPostsComponent {

  @Input() childNewPosts: RecentPost[];

}
