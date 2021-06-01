import { Component, Input, OnInit } from '@angular/core';
import { CrewMember } from '../../../../dto/CrewMember';
import { Movie } from '../../../../dto/Movie';
import { Routes } from '../../../../dto/Routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crew-actor-tab',
  templateUrl: './crew-actor-tab.component.html',
  styleUrls: ['./crew-actor-tab.component.scss']
})
export class CrewActorTabComponent {

  @Input() crewMember!: CrewMember;
  public selectedMovie!: Movie[];

  constructor(private router: Router) { }

  public showMovies(): boolean {
    return (this.crewMember && this.crewMember.actedInMovies && this.crewMember.actedInMovies.length > 0);
  }

  public navigateToMovie(): void{
    this.router.navigate([Routes.BASE_DETAILS_URL, this.selectedMovie[0].idString]);
  }
}
