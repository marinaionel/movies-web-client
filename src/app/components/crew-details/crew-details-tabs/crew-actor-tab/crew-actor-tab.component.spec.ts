import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewActorTabComponent } from './crew-actor-tab.component';

describe('CrewActorTabComponent', () => {
  let component: CrewActorTabComponent;
  let fixture: ComponentFixture<CrewActorTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrewActorTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewActorTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
