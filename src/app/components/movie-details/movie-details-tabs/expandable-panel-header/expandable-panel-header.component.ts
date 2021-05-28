import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Constants } from '../../dto/Constants';

@Component({
  selector: 'app-expandable-panel-header',
  templateUrl: './expandable-panel-header.component.html',
  styleUrls: ['./expandable-panel-header.component.scss']
})
export class ExpandablePanelHeaderComponent implements OnInit {

  @Input() panelName!: string;
  @Output() panelToggled = new EventEmitter<boolean>();
  public arrowUp = Constants.ARROW_UP;
  public arrowDown = Constants.ARROW_DOWN;
  public panelEnabled = true;

  constructor() { }

  ngOnInit(): void {
  }

  public showArrow(): string {
    return this.panelEnabled ? this.arrowUp : this.arrowDown;
  }

  public toggleActorsPanel(): void {
    this.panelEnabled = !this.panelEnabled;
    this.panelToggled.emit(true);
  }
}
