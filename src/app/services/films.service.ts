import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Movie, NowPlaying } from '../interfaces/nowPlaying-response';

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

  getNowPlaying(): Observable<Movie[]> {
    if (this.loading) return of([]);

    this.loading = true;
    return this.http
      .get<NowPlaying>(`${this.apiUrl}/movie/now_playing`, {
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
}
