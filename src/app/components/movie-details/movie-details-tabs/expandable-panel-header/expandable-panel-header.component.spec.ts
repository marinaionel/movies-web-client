import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandablePanelHeaderComponent } from './expandable-panel-header.component';

describe('ExpandablePanelHeaderComponent', () => {
  let component: ExpandablePanelHeaderComponent;
  let fixture: ComponentFixture<ExpandablePanelHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandablePanelHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandablePanelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
