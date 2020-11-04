import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Movie } from 'src/app/interfaces/movies-response';

@Component({
  selector: 'app-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styleUrls: ['./movies-poster-grid.component.css'],
})
export class MoviesPosterGridComponent implements OnInit {
  @Input() movies: Movie[];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClickMovie(id: number) {
    this.router.navigate(['movie', id]);
  }
}
