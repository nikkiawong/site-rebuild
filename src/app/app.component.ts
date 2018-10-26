import { Component } from '@angular/core';
import { RecentPost } from './models/recentPost.model';
import { PopularPost } from './models/popularPost.model';
import { FooterPopularPost } from './models/footerPopularPost.model';
import { FeaturePost } from './models/featurePost.model';
import { RetailPost } from './models/retailPost.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  topPosts: PopularPost[] = [
    new PopularPost("Introducing the Oh My Disney ’90s Flashback Collection, Now Available at Disney Store and shopDisney", "https://ohmy.disney.com/wp-content/uploads/2018/10/ET_OhMyDisney_90sCollection.jpg", "https://ohmy.disney.com/news/2018/10/15/oh-my-disney-90s-flashback-collection-shopdisney-disney-store/"),
    new PopularPost("The First Aladdin Teaser Is Here and We’ll Have the Chills Forever", "https://ohmy.disney.com/wp-content/uploads/2018/10/featured-sunlit-thumb-250x188.webp", "https://ohmy.disney.com/news/2018/10/11/first-aladdin-teaser-trailer/"),
    new PopularPost("Your Zodiac Sign Can Tell Us Your Top 3 Favorite Disney Movies", "https://ohmy.disney.com/wp-content/uploads/2018/10/ET_OhMyDisney_ZodiacSignFaveMovie-1.jpg", "https://ohmy.disney.com/quiz/2018/10/04/quiz-zodiac-favorite-disney-movies/"),
    new PopularPost("Freeform Is Getting Us Hyped for the Holidays Earlier Than Ever With Their Kickoff to Christmas Schedule", "https://ohmy.disney.com/wp-content/uploads/2014/11/The-Santa-Clause-250x188.webp", "https://ohmy.disney.com/news/2018/10/10/freeform-kickoff-to-christmas-schedule/")
  ]

  featuredPosts: FeaturePost[] = [
    new FeaturePost("The Amazing Lineup of Stars Joining “Mickey’s 90th Spectacular” on ABC Was Announced and We Are Excited", "https://ohmy.disney.com/wp-content/uploads/2018/09/MM90-Logo-2703-0831-black42-242x141.jpg", "https://ohmy.disney.com/news/2018/09/28/mickeys-90th-spectacular-abc-2/"),
    new FeaturePost("Christy Carlson Romano Will Guest Star in Big Hero 6 The Series and We Have an Exclusive Clip!", "https://ohmy.disney.com/wp-content/uploads/2018/09/christy-carlson-romano-trina-242x141.jpg", "https://ohmy.disney.com/news/2018/09/28/christy-carlson-romano-big-hero-6-series/"),
    new FeaturePost("DuckTales Season 3 Is Coming to Disney Channel in 2019 and It’s a Dream Come True", "https://ohmy.disney.com/wp-content/uploads/2018/09/DuckTales-season-3-recording-studio-242x141.jpg", "https://ohmy.disney.com/news/2018/09/21/ducktales-season-three-disney-channel/"),
    new FeaturePost("Meet New Characters From Ralph Breaks the Internet in the Latest Trailer!", "https://ohmy.disney.com/wp-content/uploads/2018/09/WIR2-RGB-mono_fullcomp.0006-242x141.jpg", "https://ohmy.disney.com/news/2018/09/20/ralph-breaks-the-internet-trailer-poster/")
  ]

  retailPosts: RetailPost[] = [
    new RetailPost("OUR WISH IS TO WEAR THIS MAGIC CARPET DENIM JACKET EVERY SINGLE DAY", "DISNEY CLOTHES", "https://ohmy.disney.com/wp-content/uploads/2018/10/C_OhMyDisney_AladdinJacket_02.jpg", 1,  "https://ohmy.disney.com/shop/disney-clothes/oh-my-disney-collection-magic-carpet-denim-jacket-aladdin/"),
    new RetailPost("THIS TOY STORY ALIEN ONESIE WILL MAKE YOU THE COZIEST PERSON THIS HALLOWEEN", "DISNEY CLOTHES", "https://ohmy.disney.com/wp-content/uploads/2018/10/C_OhMyDisney_AlienOnesie_01.jpg", 1, "https://ohmy.disney.com/shop/disney-clothes/shop-toy-story-alien-onesie/"),
    new RetailPost("CELEBRATE MICKEY MOUSE’S UPCOMING ANNIVERSARY WITH THIS AMAZING HISTORY BOOK", "DISNEY BOOKS", "https://ohmy.disney.com/wp-content/uploads/2018/10/C_OhMyDisney_MickeyMouseTaschenBook_01.jpg", 2,  "https://ohmy.disney.com/shop/disney-book/shop-taschen-walt-disneys-mickey-mouse-ultimate-history/")
  ]

  footerPopularPosts: FooterPopularPost[] = [
    new FooterPopularPost("Can You Guess the ‘90s Disney Movie from One Random Clue?", "https://ohmy.disney.com/wp-content/uploads/2018/09/ET_OhMyDisney_Guess90sMovieFromOneClue.jpg", "https://ohmy.disney.com/quiz/2018/09/23/quiz-guess-90s-disney-movie-one-random-clue/"),
    new FooterPopularPost("Only a True Disney Princess Fan Can Get 100% on This Quiz", "https://ohmy.disney.com/wp-content/uploads/2018/09/I_OhMyDisney_TruePrincessFansOnly_Featured-242x141.jpg", "https://ohmy.disney.com/quiz/2018/09/22/true-disney-princess-fan-100-percent-quiz/"),
    new FooterPopularPost("Can You Guess the Disney Character Based on the Sketch We Drew with Our Non-Dominant Hand?", "https://ohmy.disney.com/wp-content/uploads/2018/09/ET_OhMyDisney_NonDominantHandQuiz.jpg", "https://ohmy.disney.com/quiz/2018/09/20/quiz-guess-character-sketch-non-dominant-hand/"),
    new FooterPopularPost("Match the Dwelling to the Disney Pixar Character That Lives There", "https://ohmy.disney.com/wp-content/uploads/2018/09/et_ohmydisney_matchdwellingtocharacter.jpg", "https://ohmy.disney.com/quiz/2018/09/17/quiz-match-dwelling-disney-pixar-character/")
  ]

}
