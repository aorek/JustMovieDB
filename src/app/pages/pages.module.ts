import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'ng-starrating';

import { ComponentsModule } from '../components/components.module';

import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { MovieComponent } from './movie/movie.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [HomeComponent, SearchComponent, MovieComponent],
  imports: [CommonModule, ComponentsModule, PipesModule, RatingModule],
})
export class PagesModule {}
