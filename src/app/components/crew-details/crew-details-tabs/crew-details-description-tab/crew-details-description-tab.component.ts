import { Component, Input } from '@angular/core';
import { CrewMember } from '../../../../dto/CrewMember';

@Component({
  selector: 'app-crew-details-description-tab',
  templateUrl: './crew-details-description-tab.component.html',
  styleUrls: ['./crew-details-description-tab.component.scss']
})
export class CrewDetailsDescriptionTabComponent {

  @Input() crewMember!: CrewMember;

  constructor() {
  }

  public showDescription(): boolean {
    return !!(this.crewMember && this.crewMember.description && this.crewMember.description.length > 0);
  }

  public showYear(): boolean {
    return !!(this.crewMember && this.crewMember.birth);
  }

}
