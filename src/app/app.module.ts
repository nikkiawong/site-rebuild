import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { PopularPostsComponent } from './popular-posts/popular-posts.component';
import { RetailPostsComponent } from './retail-posts/retail-posts.component';
import { FeaturedPostsComponent } from './featured-posts/featured-posts.component';
import { FooterPopularPostsComponent } from './footer-popular-posts/footer-popular-posts.component';


@NgModule({
  declarations: [
    AppComponent,
    RecentPostsComponent,
    PopularPostsComponent,
    RetailPostsComponent,
    FeaturedPostsComponent,
    FooterPopularPostsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
