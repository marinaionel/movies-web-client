import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Constants } from '../../movie-details/dto/Constants';
import { CrewMemberProviderService } from '../../../services/crew-member-provider.service';
import { CrewMember } from '../../../dto/CrewMember';

@Component({
  selector: 'app-crew-details-page',
  templateUrl: './crew-details-page.component.html',
  styleUrls: ['./crew-details-page.component.scss']
})
export class CrewDetailsPageComponent implements OnInit {

  private crewMember$!: Observable<CrewMember | null>;

  constructor(
    private route: ActivatedRoute,
    private crewService: CrewMemberProviderService
  ) {
  }

  ngOnInit(): void {
    this.crewMember$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
          return this.crewService.getCrewMember$(params.get(Constants.MOVIE_URL_PARAMETER));
        }
      ));
  }

  public getCrewMember$(): Observable<CrewMember | null> {
    return this.crewMember$;
  }

}
