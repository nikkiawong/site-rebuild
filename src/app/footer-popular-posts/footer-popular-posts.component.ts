import { Component, Input } from '@angular/core';
import { FooterPopularPost } from '../models/footerPopularPost.model';

@Component({
  selector: 'app-footer-popular-posts',
  templateUrl: './footer-popular-posts.component.html',
  styleUrls: ['./footer-popular-posts.component.css']
})
export class FooterPopularPostsComponent {

  @Input() childFooterPopular: FooterPopularPost[];

}
