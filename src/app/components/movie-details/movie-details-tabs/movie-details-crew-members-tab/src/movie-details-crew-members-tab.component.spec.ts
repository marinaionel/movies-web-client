import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsCrewMembersTabComponent } from './movie-details-crew-members-tab.component';

describe('MovieDetailsCrewMembersTabComponent', () => {
  let component: MovieDetailsCrewMembersTabComponent;
  let fixture: ComponentFixture<MovieDetailsCrewMembersTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailsCrewMembersTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsCrewMembersTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
