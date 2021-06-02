import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewDirectorTabComponent } from './crew-director-tab.component';

describe('CrewDirectorTabComponent', () => {
  let component: CrewDirectorTabComponent;
  let fixture: ComponentFixture<CrewDirectorTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrewDirectorTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewDirectorTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
