import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';

import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FilmComponent } from './film/film.component';

@NgModule({
  declarations: [HomeComponent, SearchComponent, FilmComponent],
  imports: [CommonModule, ComponentsModule],
})
export class PagesModule {}
