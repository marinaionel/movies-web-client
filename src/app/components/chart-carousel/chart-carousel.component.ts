import { Component, Input } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { AnimationType, scaleIn, scaleOut } from './animations/carousel.animations';
import { Protocol } from 'puppeteer';
import integer = Protocol.integer;
import { ChartSlide } from '../../dto/ChartSlide';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chart-carousel',
  templateUrl: './chart-carousel.component.html',
  styleUrls: ['./chart-carousel.component.scss'],
  animations: [
    trigger('slideAnimation', [
      transition('void => scale', [
        useAnimation(scaleIn, { params: { time: '500ms' } })
      ]),
      transition('scale => void', [
        useAnimation(scaleOut, { params: { time: '500ms' } })
      ]),
    ])
  ]
})

export class ChartCarouselComponent{
  @Input() public slides: ChartSlide[] = [];
  @Input() public animationType = AnimationType.Scale;

  private currentSlide = 0;

  constructor(private router: Router) {
  }

  public getCurrentSlide(): integer {
    return this.currentSlide;
  }

  onPreviousClick(): void {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick(): void {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

  navigateTo(movieTitle: string): void {
    this.router.navigate(['/details', movieTitle]);
  }

}


