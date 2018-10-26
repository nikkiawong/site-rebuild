import { Component, OnInit, Input } from '@angular/core';
import { RecentPost } from '../models/recentPost.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newsPosts: RecentPost[] = [
    new RecentPost("10 Immersive Rooms at “Mickey: The True Original Exhibition” Have Been Announced", "We can't wait to see them!", "https://ohmy.disney.com/wp-content/uploads/2018/08/Mickey-The-True-Original-Exhibition-242x141.jpg", "https://ohmy.disney.com/news/2018/10/26/mickey-the-true-original-exhibition-immersive-rooms/")
  ]

}
