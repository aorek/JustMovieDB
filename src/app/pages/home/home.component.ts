import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

import { Movie } from 'src/app/interfaces/movies-response';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public moviesSlice: Movie[];
  public movies: Movie[];

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollPos =
      (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const scrollHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight;

    if (scrollPos > scrollHeight) {
      this.moviesService.getNowPlaying().subscribe((movies) => {
        this.movies.push(...movies);
      });
    }
  }

  constructor(private moviesService: MoviesService) {
    this.movies = [];
  }

  ngOnInit(): void {
    this.moviesService.getNowPlaying().subscribe((movies) => {
      this.movies = movies;
      this.moviesSlice = movies;
    });
  }

  ngOnDestroy(): void {
    this.moviesService.resetPage();
  }
}
