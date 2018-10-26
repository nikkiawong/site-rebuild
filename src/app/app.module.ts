import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { PopularPostsComponent } from './popular-posts/popular-posts.component';
import { RetailPostsComponent } from './retail-posts/retail-posts.component';
import { FeaturedPostsComponent } from './featured-posts/featured-posts.component';
import { FooterPopularPostsComponent } from './footer-popular-posts/footer-popular-posts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsComponent } from './news/news.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    RecentPostsComponent,
    PopularPostsComponent,
    RetailPostsComponent,
    FeaturedPostsComponent,
    FooterPopularPostsComponent,
    NavbarComponent,
    NewsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
