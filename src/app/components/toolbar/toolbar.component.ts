import { Component, OnInit } from '@angular/core';
import { Constants } from '../auth/dto/Constants';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SearchProviderService } from '../../services/search-provider.service';
import { Movie } from '../../dto/Movie';
import { CrewMember } from '../../dto/CrewMember';
import { SpinnerOverlayService } from '../../services/spinner-overlay.service';
import { Routes } from '../../dto/Routes';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit{

  public searchIcon = Constants.SEARCH_ICON;
  public chartsPath = Constants.CHARTS_URL;
  public myPlaceHolder = 'Search for more than three characters';

  public myControl = new FormControl();
  public options: string[] = [];
  public filteredOptions!: Observable<string[]>;
  public categories = ['Movies', 'Crew Members'];
  public selectedCategory = 'Movies';
  private searchedMovies: Movie[] = [];
  private searchedCrewMembers: CrewMember[] = [];
  public searchQuery!: string;


  constructor(public router: Router, public auth: AuthService,
              private searchProvider: SearchProviderService, private spinner: SpinnerOverlayService) {
  }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => {
          if ((this.findMovieByString(value) === undefined && this.selectedCategory === this.categories[0])
            || (this.findCrewMemberByString(value) === undefined && this.selectedCategory === this.categories[1])) {
            this.spinner.getSpinner$().next(false);
            this.options = [];
            this.searchedMovies = [];
            this.searchedCrewMembers = [];
            if (this.myControl && this.myControl.value && this.myControl.value.length > 3) {
              return this.filter(value);
            }
          }
          return [];
        })
      );
  }

  private filter(value: string): string[] {
    this.spinner.getSpinner$().next(true);
    if (this.selectedCategory === 'Movies') {
      this.searchProvider.getSearchedMovies$(value).subscribe(next => {
        this.searchedMovies.push(...next);
        this.searchedMovies.forEach(movie => this.options.push(movie.title));
        this.spinner.getSpinner$().next(false);
      });
    } else {
      if (this.selectedCategory === 'Crew Members') {
        this.searchProvider.getSearchedCrewMembers$(value).subscribe(next => {
          this.searchedCrewMembers.push(...next);
          this.searchedCrewMembers.forEach(crew => this.options.push(crew.name));
          this.spinner.getSpinner$().next(false);
        });
      }
    }
    return this.options = [];
  }

  public optionChanged(): void {
    this.searchedMovies = [];
    this.searchedCrewMembers = [];
    this.searchQuery = '';
  }

  public findMovieByString(value: string): Movie | undefined{
    return this.searchedMovies.find((movie: Movie) => movie.title === value);
  }

  public findCrewMemberByString(value: string): CrewMember | undefined{
    return this.searchedCrewMembers.find((crewMember: CrewMember) => crewMember.name === value);
  }

  public navigateToSearchedItem(): void {
    if (this.selectedCategory === this.categories[0]){
      this.searchedMovies.find((movie: Movie) => {
        if (movie.title === this.searchQuery) {
          this.searchQuery = '';
          this.router.navigate([Routes.BASE_DETAILS_URL, movie.idString]);
        }
      });
    }

    if (this.selectedCategory === this.categories[1]){
      this.searchedCrewMembers.find((crewMember: CrewMember) => {
        if (crewMember.name === this.searchQuery) {
          this.searchQuery = '';
          this.router.navigate([Routes.CREW_DETAILS_URL, crewMember.id]);
        }
      });
    }
  }
}
