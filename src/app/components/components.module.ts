import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RatingModule } from 'ng-starrating';

import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { FilmsPosterGridComponent } from './films-poster-grid/films-poster-grid.component';

@NgModule({
  declarations: [NavbarComponent, SlideshowComponent, FilmsPosterGridComponent],
  imports: [CommonModule, RouterModule, RatingModule],
  exports: [NavbarComponent, SlideshowComponent, FilmsPosterGridComponent],
})
export class ComponentsModule {}
