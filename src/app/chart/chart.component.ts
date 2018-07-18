///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit } from '@angular/core';

import {InstanceCountService} from '../services/instanceCount.service';
import { Chart } from 'chart.js';
import {CompletedDownloadsService} from '../services/completedDownloads.service';
import {RestService} from '../services/rest.service';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  constructor(private instService: InstanceCountService,
              private compDownService: CompletedDownloadsService,
              private rest: RestService) { }

  messages = this.instService.InstanceCount;
  label = this.instService.label;
  color = this.instService.bg;
  chartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    title: {
      display: true,
      text: 'Instances'
    }
  };

  chartData = this.messages;

  onChartClick(event) {
    for (const a of event.active) {
      console.log(a._model.label);
      this.getCompletedForInstance(a._model.label);
    }
  }

  getCompletedForInstance(event) {
    this.compDownService.clear();
    this.compDownService.andInstanceName(event);
    this.instService.setShow(false);
    this.compDownService.setShow(true);
  }

  getChartShow() {
    return this.instService.show;
  }

}
