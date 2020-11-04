import { Component, HostListener, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/nowPlaying-response';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public moviesSlice: Movie[];
  public movies: Movie[];

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollPos =
      (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const scrollHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight;

    if (scrollPos > scrollHeight) {
      this.filmService.getNowPlaying().subscribe((movies) => {
        this.movies.push(...movies);
      });
    }
  }

  constructor(private filmService: FilmsService) {
    this.movies = [];
  }

  ngOnInit(): void {
    this.filmService.getNowPlaying().subscribe((movies) => {
      this.movies = movies;
      this.moviesSlice = movies;
    });
  }
}
