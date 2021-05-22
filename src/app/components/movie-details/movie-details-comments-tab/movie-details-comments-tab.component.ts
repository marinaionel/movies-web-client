import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Movie } from '../../../dto/Movie';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-movie-details-comments',
  templateUrl: './movie-details-comments.component.html',
  styleUrls: ['./movie-details-comments.component.css']
})
export class MovieDetailsCommentsTabComponent implements OnInit, AfterViewInit{

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() movie!: Movie;

  public pageEvent!: PageEvent;
  public length!: number;
  public pageSize = 10;

  constructor(private changeDetectorReference: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.length = this.movie.comments.length;
  }

  ngAfterViewInit(): void {
    this.changeDetectorReference.detectChanges();
  }

  public disabledPaginator(): boolean{
    return this.movie.comments.length <= 1;
  }
}
