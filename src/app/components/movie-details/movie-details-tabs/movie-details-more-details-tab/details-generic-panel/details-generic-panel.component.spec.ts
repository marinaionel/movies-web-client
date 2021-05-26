import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsGenericPanelComponent } from './details-generic-panel.component';

describe('DetailsGenericPanelComponent', () => {
  let component: DetailsGenericPanelComponent;
  let fixture: ComponentFixture<DetailsGenericPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsGenericPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsGenericPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
