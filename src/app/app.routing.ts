import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
 {
  path: 'news',
  component: NewsComponent
 }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
