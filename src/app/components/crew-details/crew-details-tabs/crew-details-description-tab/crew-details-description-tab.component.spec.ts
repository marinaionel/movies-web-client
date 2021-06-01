import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewDetailsDescriptionTabComponent } from './crew-details-description-tab.component';

describe('CrewDetailsDescriptionTabComponent', () => {
  let component: CrewDetailsDescriptionTabComponent;
  let fixture: ComponentFixture<CrewDetailsDescriptionTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrewDetailsDescriptionTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewDetailsDescriptionTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
