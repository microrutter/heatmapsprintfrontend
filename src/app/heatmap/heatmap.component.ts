import { Component} from '@angular/core';

import { Chart } from 'chart.js';
import {HeatMapService} from '../services/heatmap.service';

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.css']
})
export class HeatmapComponent {

  constructor(private hm: HeatMapService) { }

  radarChartLabels: string[] = this.getLabel();

  radarChartData: any = [
   {data: this.getData() , label: '% of Bugs'}
  ];

  getLabel() {
    return this.hm.label;
  }

  getData() {
    return this.hm.data;
  }

  // events
  chartClicked(e: any): void {
    console.log(e);
  }

  chartHovered(e: any): void {
    console.log(e);
  }

  getShow() {
    return this.hm.show;
  }


}
