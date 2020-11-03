import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/nowPlaying-response';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public movies: Movie[];

  constructor(private filmService: FilmsService) {
    this.movies = [];
  }

  ngOnInit(): void {
    this.filmService
      .getNowPlaying()
      .subscribe(({ results }) => (this.movies = results));
  }
}
