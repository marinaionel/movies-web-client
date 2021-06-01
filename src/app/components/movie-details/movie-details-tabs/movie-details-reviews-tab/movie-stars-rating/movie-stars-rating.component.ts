import { Component, ElementRef, EventEmitter, forwardRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-movie-stars-rating',
  templateUrl: './movie-stars-rating.component.html',
  styleUrls: ['./movie-stars-rating.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MovieStarsRatingComponent),
    multi: true
  }]
})
export class MovieStarsRatingComponent implements OnInit{

  public onChange!: Event;
  public value = 0;
  public stars = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  @Input() id = '';
  @Input() event!: EventEmitter<boolean>;
  @ViewChildren('ngxCheckbox') ngxCheckbox: QueryList<ElementRef> | undefined;

  constructor() {
  }

  ngOnInit(): void {
        this.event.subscribe(next => {
          if (next){
            this.rate(0);
            if (this.ngxCheckbox) {
              this.ngxCheckbox.forEach((checkbox: ElementRef) => {
                checkbox.nativeElement.checked = false;
              });
            }
          }
        });
    }

  public rate(rate: number): void {
    this.propagateChange(rate);
  }

  public writeValue(value: number): void {
    if (this.ngxCheckbox && value === null) {
      this.ngxCheckbox.forEach((checkbox: ElementRef) => {
        checkbox.nativeElement.checked = false;
      });
    }
    this.value = value;
  }

  public registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  public registerOnTouched(fn: any): void {
  }

  private propagateChange = (_: any) => {
  }
}
