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
import { MovieDetailsTab } from '../../../movie-details/dto/MovieDetailsTab';
import { Constants } from '../../../movie-details/dto/Constants';
import { TabsProviderService } from '../../../../services/tabs-provider.service';
import { CrewMember } from '../../../../dto/CrewMember';

@Component({
  selector: 'app-crew-details-tabs',
  templateUrl: './crew-details-tabs.component.html',
  styleUrls: ['./crew-details-tabs.component.scss']
})
export class CrewDetailsTabsComponent implements AfterViewInit {

  @Input() crewMember!: CrewMember;

  private tabs: MovieDetailsTab[] = [];
  private componentRef?: ComponentRef<any>;

  @ViewChild(Constants.MOVIE_DYNAMIC_COMP, { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver,
              private tabsProvider: TabsProviderService,
              private changeDetectorReference: ChangeDetectorRef) {
    tabsProvider.crewTabs$().subscribe((tabs: MovieDetailsTab[]) => this.tabs = tabs);
  }

  ngAfterViewInit(): void {
    const detailsTab = this.tabsProvider.getCrewTabByOrderNumber(0);
    const factory = this.resolver.resolveComponentFactory(detailsTab.component);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.crewMember = this.crewMember;
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
    const detailsTab = this.tabsProvider.getCrewTabByOrderNumber(orderNumber);
    const factory = this.resolver.resolveComponentFactory(detailsTab.component);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.crewMember = this.crewMember;
  }
}
