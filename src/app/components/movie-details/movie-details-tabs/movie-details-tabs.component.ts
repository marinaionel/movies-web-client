import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { MovieDetailsTab } from '../dto/MovieDetailsTab';
import { TabsProviderService } from '../services/tabs-provider.service';

@Component({
  selector: 'app-movie-details-tabs',
  templateUrl: './movie-details-tabs.component.html',
  styleUrls: ['./movie-details-tabs.component.css']
})
export class MovieDetailsTabsComponent implements AfterViewInit{

  private tabs: MovieDetailsTab[] = [];

  public componentRef?: ComponentRef<any>;

  @ViewChild('tabContent', { read: ViewContainerRef }) container?: any;

  constructor(private resolver: ComponentFactoryResolver, private tabsProvider: TabsProviderService) {
    tabsProvider.tabs$().subscribe((tabs) => this.tabs = tabs);
  }

  ngAfterViewInit(): void {
    const detailsTab = this.tabsProvider.getTabByOrderNumber(0);
    const factory = this.resolver.resolveComponentFactory(detailsTab.component);
    this.componentRef = this.container.createComponent(factory);
  }

  public getTabs(): MovieDetailsTab[] {
    return this.tabs;
  }

  public changeTab(orderNumber: number): void {
    this.tabs = this.tabs.map((tab, i) => i === orderNumber ? { ...tab, active: true } : { ...tab, active: false });
    this.container.clear();

    const detailsTab = this.tabsProvider.getTabByOrderNumber(orderNumber);
    const factory = this.resolver.resolveComponentFactory(detailsTab.component);
    this.componentRef = this.container.createComponent(factory);
  }
}
