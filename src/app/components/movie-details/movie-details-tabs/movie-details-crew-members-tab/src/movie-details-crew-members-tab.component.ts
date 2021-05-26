import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../../../../dto/Movie';
import { CrewMember } from '../../../../../dto/CrewMember';
import { Constants } from '../../../dto/Constants';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-movie-details-crew-members-tab',
  templateUrl: './movie-details-crew-members-tab.component.html',
  styleUrls: ['./movie-details-crew-members-tab.component.css']
})
export class MovieDetailsCrewMembersTabComponent implements OnInit{

  @Input() movie!: Movie;
  public directorsPanelName = 'Directors';
  public actorsPanelName = 'Actors';


  constructor(private client: HttpClient) {
  }

  ngOnInit(): void {
    const directors: CrewMember[] = this.movie.directors;
    const actors: CrewMember[] = this.movie.actors;
    this.checkAllImages(directors);
    this.checkAllImages(actors);
  }

  private checkAllImages(crew: CrewMember[]): void {
    if (this.movie && crew) {
      crew.forEach((member: CrewMember) => {
        if (!member.imageUrl) {
          member.imageUrl = Constants.NOT_FOUND_IMAGE;
        } else {
          this.client.get(member.imageUrl).pipe(catchError(err => {
            member.imageUrl = Constants.NOT_FOUND_IMAGE_WHITE;
            return EMPTY;
          }));
        }
      });
    }
  }

}
