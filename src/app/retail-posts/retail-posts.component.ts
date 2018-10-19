import { Component, Input } from '@angular/core';
import { RetailPost } from '../models/retailPost.model';

@Component({
  selector: 'app-retail-posts',
  templateUrl: './retail-posts.component.html',
  styleUrls: ['./retail-posts.component.css']
})
export class RetailPostsComponent {

  @Input() childRetailPosts: RetailPost[];

}
