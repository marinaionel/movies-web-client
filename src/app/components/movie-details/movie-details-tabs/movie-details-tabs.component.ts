import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { MovieDetailsTab } from '../dto/MovieDetailsTab';
import { MovieDetailsPlotTabComponent } from '../movie-details-plot-tab/movie-details-plot-tab.component';
import { SignInComponent } from '../../auth/sign-in/sign-in.component';
import { TabsProviderService } from '../services/tabs-provider.service';

@Component({
  selector: 'app-movie-details-tabs',
  templateUrl: './movie-details-tabs.component.html',
  styleUrls: ['./movie-details-tabs.component.css']
})
export class MovieDetailsTabsComponent {

  private tabs: MovieDetailsTab[] = [];

  public componentRef?: ComponentRef<any>;

  @ViewChild('tabContent', { read: ViewContainerRef }) container?: any;

  constructor(private resolver: ComponentFactoryResolver, private tabsProvider: TabsProviderService) {
    tabsProvider.tabs$().subscribe((tabs) => this.tabs = tabs);
  }

  public getTabs(): MovieDetailsTab[]{
    return this.tabs;
  }

  public changeTab(index: number): void {
    this.tabs = this.tabs.map((tab, i) => i === index ? { ...tab, active: true } : { ...tab, active: false });
    this.container.clear();

    if (index === 1) {
      const factory = this.resolver.resolveComponentFactory(MovieDetailsPlotTabComponent);
      this.componentRef = this.container.createComponent(factory);
    } else if (index === 2) {
      const factory = this.resolver.resolveComponentFactory(SignInComponent);
      this.componentRef = this.container.createComponent(factory);
    }
  }
}
