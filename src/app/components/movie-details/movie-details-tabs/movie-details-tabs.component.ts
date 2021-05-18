import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { MovieDetailsTab } from '../dto/MovieDetailsTab';
import { TabsProviderService } from '../services/tabs-provider.service';
import { Movie } from '../../../dto/Movie';
import { Constants } from '../dto/Constants';

@Component({
  selector: 'app-movie-details-tabs',
  templateUrl: './movie-details-tabs.component.html',
  styleUrls: ['./movie-details-tabs.component.css']
})
export class MovieDetailsTabsComponent implements AfterViewInit{

  @Input() movie!: Movie;

  private tabs: MovieDetailsTab[] = [];
  private componentRef?: ComponentRef<any>;

  @ViewChild(Constants.MOVIE_DYNAMIC_COMP, { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver,
              private tabsProvider: TabsProviderService,
              private changeDetectorReference: ChangeDetectorRef) {
    tabsProvider.tabs$().subscribe((tabs: MovieDetailsTab[]) => this.tabs = tabs);
  }

  ngAfterViewInit(): void {
    const detailsTab = this.tabsProvider.getTabByOrderNumber(0);
    const factory = this.resolver.resolveComponentFactory(detailsTab.component);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.movie = this.movie;
    this.changeDetectorReference.detectChanges();
  }

  public getTabs(): MovieDetailsTab[] {
    return this.tabs;
  }

  public changeTab(orderNumber: number): void {
    this.tabs = this.tabs.map((tab: MovieDetailsTab, i: number) => i === orderNumber ? {
      ...tab,
      active: true
    } : { ...tab, active: false });
    this.container.clear();
    const detailsTab = this.tabsProvider.getTabByOrderNumber(orderNumber);
    const factory = this.resolver.resolveComponentFactory(detailsTab.component);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.data = this.movie;
  }
}
