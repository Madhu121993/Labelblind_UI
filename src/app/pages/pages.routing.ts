import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ResultsComponent } from './results/results.component';
export const pagesRoutes: Routes = [
    {
      path: '',
      children: [
        {
          path: 'home',
          component: HomePageComponent
        }, {
            path: 'result',
            component: ResultsComponent
          }
      ]
    }
  ];