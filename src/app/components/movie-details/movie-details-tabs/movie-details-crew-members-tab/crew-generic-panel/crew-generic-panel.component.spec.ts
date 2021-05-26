import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewGenericPanelComponent } from './crew-generic-panel.component';

describe('CrewGenericPanelComponent', () => {
  let component: CrewGenericPanelComponent;
  let fixture: ComponentFixture<CrewGenericPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrewGenericPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewGenericPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
