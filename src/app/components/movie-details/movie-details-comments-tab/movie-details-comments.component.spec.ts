import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieDetailsCommentsTabComponent } from './movie-details-comments-tab.component';


describe('MovieDetailsCommentsComponent', () => {
  let component: MovieDetailsCommentsTabComponent;
  let fixture: ComponentFixture<MovieDetailsCommentsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailsCommentsTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsCommentsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
