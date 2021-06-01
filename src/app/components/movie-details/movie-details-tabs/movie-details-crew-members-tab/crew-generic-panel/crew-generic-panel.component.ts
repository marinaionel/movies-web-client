import { Component, Input, OnInit } from '@angular/core';
import { CrewMember } from '../../../../../dto/CrewMember';
import { Movie } from '../../../../../dto/Movie';
import { Router } from '@angular/router';
import { Routes } from '../../../../../dto/Routes';

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
  public panelEnabled = true;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if (this.directorsPanel){
      this.crewMembers = this.movie.directors;
    }
    else{
      this.crewMembers = this.movie.actors;
    }
  }

  public toggleCrewPanel(): void {
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

  public navigateToCrewMember(crewMember: CrewMember): void{
    this.router.navigate([Routes.CREW_DETAILS_URL, crewMember.id]);
  }
}
