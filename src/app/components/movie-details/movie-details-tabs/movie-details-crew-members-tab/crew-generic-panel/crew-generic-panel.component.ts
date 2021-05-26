import { Component, Input, OnInit } from '@angular/core';
import { Constants } from '../../../dto/Constants';
import { CrewMember } from '../../../../../dto/CrewMember';
import { Movie } from '../../../../../dto/Movie';

@Component({
  selector: 'app-crew-generic-panel',
  templateUrl: './crew-generic-panel.component.html',
  styleUrls: ['./crew-generic-panel.component.scss']
})
export class CrewGenericPanelComponent implements OnInit{

  @Input() panelName!: string;
  @Input() movie!: Movie;
  @Input() directorsPanel!: boolean;
  public crewMembers!: CrewMember[];

  public arrowUp = Constants.ARROW_UP;
  public arrowDown = Constants.ARROW_DOWN;
  public panelEnabled = true;

  constructor() {
  }

  ngOnInit(): void {
    if (this.directorsPanel){
      this.crewMembers = this.movie.directors;
    }
    else{
      this.crewMembers = this.movie.actors;
    }
  }

  public showArrow(): string {
    return this.panelEnabled ? this.arrowUp : this.arrowDown;
  }

  public toggleActorsPanel(): void {
    this.panelEnabled = !this.panelEnabled;
  }

  public validCrewMembers(): boolean {
    if (this.directorsPanel){
      return this.movie && this.movie.directors && this.movie.directors.length > 0;
    }
    else{
      return this.movie && this.movie.actors && this.movie.actors.length > 0;
    }
  }
}
