import { Component, Input } from '@angular/core';
import { CrewMember } from '../../../../dto/CrewMember';
import { Movie } from '../../../../dto/Movie';
import { Routes } from '../../../../dto/Routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crew-director-tab',
  templateUrl: './crew-director-tab.component.html',
  styleUrls: ['./crew-director-tab.component.scss']
})
export class CrewDirectorTabComponent {

  @Input() crewMember!: CrewMember;
  public selectedMovie!: Movie[];

  constructor(private router: Router) { }

  public showMovies(): boolean {
    return (this.crewMember && this.crewMember.directedMovies && this.crewMember.directedMovies.length > 0);
  }

  public navigateToMovie(): void{
    this.router.navigate([Routes.BASE_DETAILS_URL, this.selectedMovie[0].idString]);
  }
}
