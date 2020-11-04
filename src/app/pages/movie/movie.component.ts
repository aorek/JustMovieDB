import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    private activeRouter: ActivatedRoute,
    private moviesService: MoviesService,
    private localtion: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activeRouter.params.subscribe(({ id }) => {
      this.moviesService.getMovieById(id).subscribe((movie) => {
        if (!movie) {
          this.router.navigateByUrl('home');
          return;
        }

        this.movie = movie;
        this.movie.credits.cast = this.movie.credits.cast.filter(
          (c) => c.profile_path !== null
        );
        console.log(movie.credits.cast);
      });
    });
  }

  onGoBackClick() {
    this.localtion.back();
  }
}
