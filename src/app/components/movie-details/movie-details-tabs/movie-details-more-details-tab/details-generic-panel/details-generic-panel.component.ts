import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-generic-panel',
  templateUrl: './details-generic-panel.component.html',
  styleUrls: ['./details-generic-panel.component.css']
})
export class DetailsGenericPanelComponent implements OnInit {

  @Input() details!: any | null;
  @Input() panelName!: string;
  @Input() display!: boolean;

  constructor() { }

  ngOnInit(): void {
  }
}
