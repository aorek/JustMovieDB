import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieResponse } from 'src/app/interfaces/movie-response';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  public movie: MovieResponse;

  constructor(
    private router: ActivatedRoute,
    private moviesService: MoviesService,
    private localtion: Location
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe(({ id }) => {
      this.moviesService.getMovieById(id).subscribe((movie) => {
        console.log(movie);

        this.movie = movie;
      });
    });
  }

  onGoBackClick() {
    this.localtion.back();
  }
}
