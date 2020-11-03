import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/nowPlaying-response';
import Swiper from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  @Input() movies: Movie[];

  private swiper: Swiper;

  constructor() {}

  ngAfterViewInit(): void {
    this.swiperInit();
  }

  ngOnInit(): void {}

  swiperInit() {
    this.swiper = new Swiper('.swiper-container', {
      loop: true,
    });
  }

  onSlicePrev() {
    this.swiper.slidePrev();
  }

  onSliceNext() {
    this.swiper.slideNext();
  }
}
