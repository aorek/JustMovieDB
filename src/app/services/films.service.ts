import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { NowPlaying } from '../interfaces/nowPlaying-response';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  constructor(private http: HttpClient) {}

  getNowPlaying(): Observable<NowPlaying> {
    return this.http.get<NowPlaying>(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=214c473020b1ecaef118c494921c7f6c&language=es-ES&page=1'
    );
  }
}
