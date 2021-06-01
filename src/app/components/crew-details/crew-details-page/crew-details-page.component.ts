import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Constants } from '../../movie-details/dto/Constants';
import { CrewMemberProviderService } from '../../../services/crew-member-provider.service';
import { CrewMember } from '../../../dto/CrewMember';
import { SpinnerOverlayService } from '../../../services/spinner-overlay.service';

@Component({
  selector: 'app-crew-details-page',
  templateUrl: './crew-details-page.component.html',
  styleUrls: ['./crew-details-page.component.scss']
})
export class CrewDetailsPageComponent implements OnInit{

  private crewMember$!: Observable<CrewMember | null>;

  constructor(
    private route: ActivatedRoute,
    private crewService: CrewMemberProviderService,
    private overlayService: SpinnerOverlayService
  ) {
  }

  ngOnInit(): void {
    this.overlayService.getSpinner$().next(true);
    this.crewMember$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
          return this.crewService.getCrewMember$(params.get(Constants.MOVIE_URL_PARAMETER)).pipe(map(member => {
            this.overlayService.getSpinner$().next(false);
            return member;
          }));
        }
      ), catchError( () =>
      {
        this.overlayService.getSpinner$().next(false);
        return EMPTY;
      }));
  }

  public getCrewMember$(): Observable<CrewMember | null> {
    return this.crewMember$;
  }

}
