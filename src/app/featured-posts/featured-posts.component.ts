import { Component, Input } from '@angular/core';
import { FeaturePost } from '../models/featurePost.model';

@Component({
  selector: 'app-featured-posts',
  templateUrl: './featured-posts.component.html',
  styleUrls: ['./featured-posts.component.css']
})
export class FeaturedPostsComponent {

  @Input() childFeaturedPosts: FeaturePost[];

}
