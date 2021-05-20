import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { map, scan } from 'rxjs/operators';
import { ComponentPortal } from '@angular/cdk/portal';
import { CustomSpinnerComponent } from '../components/custom-spinner/custom-spinner.component';
import { Constants } from '../dto/Constants';

@Injectable({
  providedIn: 'root'
})
export class SpinnerOverlayService{

  private spinnerTopRef = this.cdkSpinnerCreate();

  private spin$: Subject<boolean> = new Subject();

  public getSpinner$(): Subject<boolean>{
    return this.spin$;
  }

  constructor(private overlay: Overlay) {
    this.spin$.asObservable().pipe(
        map((value: boolean) => value ? 1 : -1),
        scan((acc, one) => (acc + one) >= 0 ? acc + one : 0, 0)
      )
      .subscribe(
        (response) => {
          if (response === 1) {
            this.showSpinner();
          } else if (response === 0 && this.spinnerTopRef.hasAttached()) {
            this.stopSpinner();
          }
        }
      );
  }

  private cdkSpinnerCreate(): OverlayRef {
    return this.overlay.create({
      hasBackdrop: true,
      backdropClass: Constants.OVERLAY_BACKDROP,
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically()
    });
  }

  private showSpinner(): void {
    this.spinnerTopRef.attach(new ComponentPortal(CustomSpinnerComponent));
  }

  private stopSpinner(): void {
    this.spinnerTopRef.detach();
  }
}
