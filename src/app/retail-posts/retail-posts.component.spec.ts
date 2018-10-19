import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailPostsComponent } from './retail-posts.component';

describe('RetailPostsComponent', () => {
  let component: RetailPostsComponent;
  let fixture: ComponentFixture<RetailPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
