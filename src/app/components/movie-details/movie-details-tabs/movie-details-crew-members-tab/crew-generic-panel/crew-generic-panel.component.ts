import { Component, Input, OnInit } from '@angular/core';
import { Constants } from '../../../dto/Constants';
import { CrewMember } from '../../../../../dto/CrewMember';

@Component({
  selector: 'app-crew-generic-panel',
  templateUrl: './crew-generic-panel.component.html',
  styleUrls: ['./crew-generic-panel.component.scss']
})
export class CrewGenericPanelComponent implements OnInit{

  @Input() panelName!: string;
  @Input() crewMembers!: CrewMember[];

  public arrowUp = Constants.ARROW_UP;
  public arrowDown = Constants.ARROW_DOWN;
  public panelEnabled = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  public showArrow(): string {
    return this.panelEnabled ? this.arrowUp : this.arrowDown;
  }

  public toggleActorsPanel(): void {
    this.panelEnabled = !this.panelEnabled;
  }

  public showCrew(): boolean {
    if (this.crewMembers) {
      return this.crewMembers.length >= 1;
    }
    return false;
  }
}
