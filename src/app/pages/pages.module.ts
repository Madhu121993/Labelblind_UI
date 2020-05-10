import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ResultsComponent } from './results/results.component';
import { RouterModule } from '@angular/router';
import { pagesRoutes } from './pages.routing';
import {HttpModule} from '@angular/http'

@NgModule({
  declarations: [HomePageComponent, ResultsComponent],
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild(pagesRoutes),
  ]
})
export class PagesModule { }
