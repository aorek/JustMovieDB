import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Movie } from 'src/app/interfaces/movies-response';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public query: string;
  public movies: Movie[];

  constructor(
    private router: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe(({ query }) => {
      this.query = query;
      this.moviesService.serchMovie(query).subscribe((movies) => {
        this.movies = movies;
      });
    });
  }
}
