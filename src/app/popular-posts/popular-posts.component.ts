import { Component, Input } from '@angular/core';
import { PopularPost } from '../models/popularPost.model';

@Component({
  selector: 'app-popular-posts',
  templateUrl: './popular-posts.component.html',
  styleUrls: ['./popular-posts.component.css']
})
export class PopularPostsComponent {

  @Input() childTopPosts: PopularPost[];

}
