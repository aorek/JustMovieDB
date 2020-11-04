import { AfterViewInit, Component, Input } from '@angular/core';
import { Cast } from 'src/app/interfaces/movie-response';
import Swiper from 'swiper';

@Component({
  selector: 'app-cast-slide-show',
  templateUrl: './cast-slide-show.component.html',
  styleUrls: ['./cast-slide-show.component.css'],
})
export class CastSlideShowComponent implements AfterViewInit {
  @Input() cast: Cast;

  constructor() {}

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15,
    });
  }
}
