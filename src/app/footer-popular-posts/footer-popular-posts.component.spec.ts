import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPopularPostsComponent } from './footer-popular-posts.component';

describe('FooterPopularPostsComponent', () => {
  let component: FooterPopularPostsComponent;
  let fixture: ComponentFixture<FooterPopularPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterPopularPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPopularPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
