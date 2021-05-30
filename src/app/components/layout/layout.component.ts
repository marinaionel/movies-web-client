import { Component, OnInit, ViewChild } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ChartCarouselComponent } from '../chart-carousel/chart-carousel.component';
import { Chart } from '../../dto/Chart';
import { Router } from '@angular/router';
import { AnimationType } from '../chart-carousel/animations/carousel.animations';
import { ChartsProviderService } from '../../services/charts-provider.service';
import { SpinnerOverlayService } from '../../services/spinner-overlay.service';
import { Constants } from '../../dto/Constants';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{
  @ViewChild(ChartCarouselComponent) carousel: ChartCarouselComponent;

  private readonly destroy$: Subject<void>;

  public charts: Chart[] = [];
  public animationType = AnimationType.Scale;

  constructor(
    private chartsProvider: ChartsProviderService,
    private router: Router,
    private overlayService: SpinnerOverlayService,
    private client: HttpClient,
    private auth: AuthService
  ) {
    this.carousel = new ChartCarouselComponent(router, client);
    this.destroy$ = new Subject();
  }

  ngOnInit(): void {
    this.overlayService.getSpinner$().next(true);
    this.chartsProvider.charts$().pipe(takeUntil(this.destroy$)).subscribe(
      charts => {
            if (charts.length !== 0) {
              this.charts = charts;
              this.overlayService.getSpinner$().next(false);
            } else {
              this.showError();
            }
      }
    );
  }

  private showError(): void {
    window.alert(Constants.MOVIES_NOT_AVAILABLE_ERROR);
  }
}
