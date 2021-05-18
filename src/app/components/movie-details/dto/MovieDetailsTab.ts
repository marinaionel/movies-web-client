import { Type } from '@angular/core';

export interface MovieDetailsTab{
  title: string;
  icon: string;
  active: boolean;
  orderNumber: number;
  component: Type<any>;
}
