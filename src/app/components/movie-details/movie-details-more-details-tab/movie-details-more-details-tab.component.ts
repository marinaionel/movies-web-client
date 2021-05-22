import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../../dto/Movie';

@Component({
  selector: 'app-movie-details-more-details-tab',
  templateUrl: './movie-details-more-details-tab.component.html',
  styleUrls: ['./movie-details-more-details-tab.component.css']
})
export class MovieDetailsMoreDetailsTabComponent implements OnInit {

  @Input() movie!: Movie;

  constructor() { }

  ngOnInit(): void {
  }

}
