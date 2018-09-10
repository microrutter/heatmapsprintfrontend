import { Component} from '@angular/core';
import {RestService} from '../services/rest.service';
import {HeatMapService} from '../services/heatmap.service';
import {InstanceCountService} from '../services/instanceCount.service';
import {CurrentSprintService} from '../services/currentSprint.service';
import {RelabelSprintService} from '../services/relabelSprint.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private rest: RestService, private instService: InstanceCountService,
              private hm: HeatMapService,
              private cs: CurrentSprintService,
              private rl: RelabelSprintService) { }

  public alerts = [];

  i = 0;

  getHeatMapKmeans() {
    this.common();
    this.rest.getHeatMapKmeans().subscribe(
      (response: any) => this.handleResponse(response),
      (error: any) => console.log(error)
    );
    this.getCurrentSprint();
  }

  getCurrentSprint() {
    this.common();
    this.rest.getCurrentSprint().subscribe(
      (response: any) => this.handleResponse(response),
      (error: any) => console.log(error)
    );
  }

  postRe(input: HTMLInputElement) {
    this.common();
    let num = input.value;
    if (num.length < 1) {
      num = '8';
    }
    this.rest.postRetrian(num).subscribe(
      (response: any) => this.getRetrainedData(response),
      (error: any) => console.log(error)
    );

  }

  getRetrainedData(t) {
    if (t) {
      this.getHeatMapKmeans();
    }
  }

  relabelSprint() {
    this.common();
    this.rest.getUnlabelledSprint().subscribe(
      (response: any) => this.handleResponse(response),
      (error: any) => console.log(error)
    );
    this.labels();
  }

  labels() {
    this.rest.getLabels().subscribe(
      (response: any) => this.handleResponse(response),
      (error: any) => console.log(error)
    );
  }

  handleResponse(response) {
    if (response === 'Empty') {
      this.clearWarnings();
      this.createAlert({'id': this.i, 'type': 'warning', 'message': 'This search found no results'});
      this.i++;
    }
  }

  clearWarnings() {
    if (this.alerts.length > 4) {
      this.alerts.length = 0;
    }
  }

  createAlert(rel: {'id': number, 'type': string, 'message': string}) {
    this.alerts.push(rel);
  }

  common () {
    this.i = 0;
    this.alerts.length = 0;
    this.hm.setShow(false);
    this.cs.setShow(false);
    this.rl.setShow(false);
  }

  getShow() {
    return this.hm.show;
  }

}
