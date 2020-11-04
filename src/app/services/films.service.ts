import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Movie, MoviesResponse } from '../interfaces/movies-response';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  private apiUrl: string = 'https://api.themoviedb.org/3';
  public page: number;
  public loading: boolean;

  constructor(private http: HttpClient) {
    this.page = 1;
    this.loading = false;
  }

  get params() {
    return {
      api_key: '214c473020b1ecaef118c494921c7f6c',
      language: 'es-ES',
      page: this.page.toString(),
    };
  }

  resetPage() {
    this.page = 1;
  }

  getNowPlaying(): Observable<Movie[]> {
    if (this.loading) return of([]);

    this.loading = true;
    return this.http
      .get<MoviesResponse>(`${this.apiUrl}/movie/now_playing`, {
        params: this.params,
      })
      .pipe(
        map(({ results }) => results),
        tap(() => {
          this.page += 1;
          this.loading = false;
        })
      );
  }

  serchMovie(query: string): Observable<Movie[]> {
    const params = { ...this.params, page: '1', query };
    return this.http
      .get<MoviesResponse>(`${this.apiUrl}/search/movie`, {
        params,
      })
      .pipe(map(({ results }) => results));
  }
}
