import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieDetailsPageComponent } from './movie-details-page.component';


describe('DetailsPageComponent', () => {
  let component: MovieDetailsPageComponent;
  let fixture: ComponentFixture<MovieDetailsPageComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [MovieDetailsPageComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
