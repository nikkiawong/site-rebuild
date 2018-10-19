import { Component } from '@angular/core';
import { RecentPost } from './models/recentPost.model';
import { PopularPost } from './models/popularPost.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  newPosts: RecentPost[] = [
    new RecentPost("YOU MUST CHECK OUT THESE AMAZING WORKS OF ART FROM THE GALLERY NUCLEUS EXHIBITION CELEBRATING 20 YEARS OF MULAN", "The tribute exhibition runs from October 20 to November 4.", "https://ohmy.disney.com/wp-content/uploads/2018/10/ET_Mulan-art-show.jpg", "https://ohmy.disney.com/news/2018/10/18/mulan-tribute-exhibition-gallery-nucleus-art/"),
    new RecentPost("ADVENTURES BY DISNEY’S NEW YORK CITY SHORT ESCAPE IS A BROADWAY FAN’S DREAM COME TRUE", "We had the best time!", "https://ohmy.disney.com/wp-content/uploads/2018/10/ET_OhMyDisney_AdventuresByDisneyNYC.jpg", "https://ohmy.disney.com/parks/2018/10/18/adventures-by-disney-new-york-city-broadway/"),
    new RecentPost("EXCLUSIVE: HERE IS THE SET LIST FOR DISNEY NIGHT ON DANCING WITH THE STARS", "Some excellent choices all around!", "https://ohmy.disney.com/wp-content/uploads/2018/10/ET_OhMyDisney_DancingWithTheStarsDisneyNight.jpg", "https://ohmy.disney.com/news/2018/10/17/dancing-with-the-stars-disney-night-season-27/")
  ]

  topPosts: PopularPost[] = [
    new PopularPost("INTRODUCING THE OH MY DISNEY ’90S FLASHBACK COLLECTION, NOW AVAILABLE AT DISNEY STORE AND SHOPDISNEY", "https://ohmy.disney.com/wp-content/uploads/2018/10/ET_OhMyDisney_90sCollection.jpg", "https://ohmy.disney.com/news/2018/10/15/oh-my-disney-90s-flashback-collection-shopdisney-disney-store/"),
    new PopularPost("The First Aladdin Teaser Is Here and We’ll Have the Chills Forever", "https://ohmy.disney.com/wp-content/uploads/2018/10/featured-sunlit-thumb-250x188.webp", "https://ohmy.disney.com/news/2018/10/11/first-aladdin-teaser-trailer/")
  ]

}
