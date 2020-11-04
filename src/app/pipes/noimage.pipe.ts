import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage',
})
export class NoimagePipe implements PipeTransform {
  transform(image: string): string {
    const noImgPath = '/assets/images/no-image.jpg';
    if (!image) return noImgPath;

    return 'https://image.tmdb.org/t/p/w300' + image;
  }
}
