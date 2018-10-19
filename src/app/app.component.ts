import { Component } from '@angular/core';
import { RecentPost } from './models/recentPost.model';
import { PopularPost } from './models/popularPost.model';
import { FeaturePost } from './models/featurePost.model';
import { RetailPost } from './models/retailPost.model';

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
    new RecentPost("EXCLUSIVE: HERE IS THE SET LIST FOR DISNEY NIGHT ON DANCING WITH THE STARS", "Some excellent choices all around!", "https://ohmy.disney.com/wp-content/uploads/2018/10/ET_OhMyDisney_DancingWithTheStarsDisneyNight.jpg", "https://ohmy.disney.com/news/2018/10/17/dancing-with-the-stars-disney-night-season-27/"),
    new RecentPost("SELECT YOUR BIRTH DATE AND WE’LL TELL YOU WHICH DISNEY VILLAIN IS YOUR SOUL MATE", "The most wicked horoscope to ever exist.", "https://ohmy.disney.com/wp-content/uploads/2018/10/ET_OhMyDisney_VillainSoulMate.jpg", "https://ohmy.disney.com/quiz/2018/10/17/quiz-select-birth-date-disney-villain-soul-mate/"),
    new RecentPost("THESE ARE THE DISNEY SONGS YOU COULD HEAR LIVE IN A CAPPELLA ON DCAPPELLA’S UPCOMING TOUR", "Check out the tracklist for their upcoming album!", "https://ohmy.disney.com/wp-content/uploads/2018/10/ET_OhMyDisney_DcappellasUpcomingTour.jpg", "https://ohmy.disney.com/news/2018/10/15/dcappella-album-tracklist-tour-dates/"),
    new RecentPost("CAN WE GUESS YOUR FAVORITE DISNEY PRINCESS BASED ON YOUR FAVORITE DISNEY SONGS?", "These are tough decisions.", "https://ohmy.disney.com/wp-content/uploads/2018/10/ET_OhMyDisney_FavePrincessFaveSong.jpg", "https://ohmy.disney.com/quiz/2018/10/15/quiz-guess-favorite-disney-princess-disney-songs/"),
    new RecentPost("INTRODUCING THE OH MY DISNEY ’90S FLASHBACK COLLECTION, NOW AVAILABLE AT DISNEY STORE AND SHOPDISNEY", "Our most rad collection yet.", "https://ohmy.disney.com/wp-content/uploads/2018/10/ET_OhMyDisney_90sCollection.jpg", "https://ohmy.disney.com/news/2018/10/15/oh-my-disney-90s-flashback-collection-shopdisney-disney-store/"),
    new RecentPost("WHICH OBSCURE DISNEY PIXAR CHARACTER SHOULD YOU BE FOR HALLOWEEN?", "Get creative with your Disney•Pixar costume!",  "https://ohmy.disney.com/wp-content/uploads/2018/10/ET_OhMyDisney_ObscureHalloweenCostume-1.jpg", "https://ohmy.disney.com/quiz/2018/10/12/quiz-obscure-disney-pixar-character-halloween/"),
    new RecentPost("HERE’S THE COMPLETE LIST OF ARTISTS FOR “MICKEY: THE TRUE ORIGINAL EXHIBITION” IN NEW YORK CITY", "We can’t wait to see this amazing art!", "https://ohmy.disney.com/wp-content/uploads/2018/10/Featured-Thumbnail-Shinique-Smith-Mickey-True-Original-Exhibition-242x141.webp", "https://ohmy.disney.com/news/2018/10/10/mickey-true-original-exhibition-artists/"),
    new RecentPost("FREEFORM IS GETTING US HYPED FOR THE HOLIDAYS EARLIER THAN EVER WITH THEIR KICKOFF TO CHRISTMAS SCHEDULE", "Check out all the movies you can’t miss!", "https://ohmy.disney.com/wp-content/uploads/2014/11/The-Santa-Clause-242x141.webp", "https://ohmy.disney.com/news/2018/10/10/freeform-kickoff-to-christmas-schedule/"),
    new RecentPost("WHICH DISNEY VILLAIN SHOULD BE YOUR BEST FRIEND?", "Bad friends forever!", "https://ohmy.disney.com/wp-content/uploads/2018/10/ET_OhMyDisney_VillianBFF.jpg", "https://ohmy.disney.com/quiz/2018/10/10/which-disney-villain-should-be-your-best-friend/"),
    new RecentPost("KENNY ORTEGA REVEALED THAT LEONARDO DICAPRIO MET WITH HIM FOR THE ROLE OF MAX IN HOCUS POCUS", "Watch our interview for even more on the magic behind Hocus Pocus.", "https://ohmy.disney.com/wp-content/uploads/2014/10/Hocus-Pocus-Graveyard-242x141.webp", "https://ohmy.disney.com/news/2018/10/09/watch-hocus-pocus-with-kenny-ortega/"),
    new RecentPost("CAPTION THIS PHOTO AND WE’LL TELL YOU WHICH DISNEY PRINCESS SONG SHOULD BE YOUR THEME SONG TODAY", "Today, your life is a Disney Princess movie!", "https://ohmy.disney.com/wp-content/uploads/2018/10/ET_OhMyDisney_PrincessThemeSong.jpg", "https://ohmy.disney.com/quiz/2018/10/08/caption-photo-disney-princess-song/"),
    new RecentPost("RALPH BREAKS THE INTERNET DIRECTORS ANNOUNCE CASTING OF REAL-LIFE INTERNET STARS AT NEW YORK COMIC CON", "This is utter casting perfection.", "https://ohmy.disney.com/wp-content/uploads/2018/10/colleen-in-ralph-breaks-the-internet-242x141.webp", "https://ohmy.disney.com/news/2018/10/05/ralph-breaks-the-internet-casts-real-internet-stars/"),
    new RecentPost("ALL THE FOOD WE ATE AT THE EPCOT INTERNATIONAL FOOD & WINE FESTIVAL", "So many tasty bites, so little time!", "https://ohmy.disney.com/wp-content/uploads/2018/10/ET_OhMyDisney_EpcotFoodAndWineFestival.jpg", "https://ohmy.disney.com/food/2018/10/05/epcot-international-food-wine-festival/"),
    new RecentPost("The Nutcracker and The Four Realms’ Mackenzie Foy Surprised Annual Passholders at the Disneyland Resort and We Can’t Wait For This Movie", "We love a fellow Disney fan.",  "https://ohmy.disney.com/wp-content/uploads/2018/10/mackenize-foy-nutcracker-disneyland-preview-242x141.webp", "https://ohmy.disney.com/news/2018/10/05/mackenzie-foy-disneyland/"),
    new RecentPost("WHICH ‘90S DISNEY MOVIE IS BASICALLY YOUR LIFE STORY?", "If only life were actually a ‘90s Disney movie.", "https://ohmy.disney.com/wp-content/uploads/2018/10/ET_OhMyDisney_90sMovieLifeStory.jpg", "https://ohmy.disney.com/quiz/2018/10/05/quiz-90s-disney-movie-life-story/"),
    new RecentPost("SNOW WHITE FANS WILL ENJOY REFLECTING ON THIS EXCERPT FROM MIRROR, MIRROR: A TWISTED TALE", "Who’s truly the fairest of them all?", "https://ohmy.disney.com/wp-content/uploads/2018/09/Mirror-Mirror-header-242x141.webp", "https://ohmy.disney.com/news/2018/10/04/mirror-mirror-twisted-tale-excerpt-cover/"),
    new RecentPost("YOUR ZODIAC SIGN CAN TELL US YOUR TOP 3 FAVORITE DISNEY MOVIES", "From Aries to Pisces to everything in between.", "https://ohmy.disney.com/wp-content/uploads/2018/10/ET_OhMyDisney_ZodiacSignFaveMovie-1.jpg", "https://ohmy.disney.com/quiz/2018/10/04/quiz-zodiac-favorite-disney-movies/"),
    new RecentPost("CAN YOU MATCH THE FOOD TO THE DISNEY MOVIE?", "Craving a good quiz?", "https://ohmy.disney.com/wp-content/uploads/2018/10/V2ET_OhMyDisney_MatchFoodWithMovie.jpg", "https://ohmy.disney.com/quiz/2018/10/02/quiz-match-food-to-disney-movie/"),
    new RecentPost("5 INSPIRING WALT DISNEY QUOTES", "Here are some wise words from Walt!", "https://ohmy.disney.com/wp-content/uploads/2018/10/thumb2-Walt-Disney-in-his-office-242x141.webp", "https://ohmy.disney.com/quotes/2018/10/01/inspiring-walt-disney-quotes/")
  ]

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

}
