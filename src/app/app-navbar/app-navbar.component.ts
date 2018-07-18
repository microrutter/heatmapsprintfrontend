import { Component, Input } from '@angular/core';
import {RestService} from '../services/rest.service';
import {InstanceCountService} from '../services/instanceCount.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {HeatMapService} from '../services/heatmap.service';

@Component ({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent {

  constructor(private rest: RestService, private instService: InstanceCountService,
              private hm: HeatMapService) { }

  @Input()
  public alerts = [];

  i = 0;

  isNavbarCollapsed = true;

  common () {
    this.i = 0;
    this.alerts.length = 0;
    this.hm.setShow(false);
  }

  getHeatMap() {
    this.common();
    console.log('In get Heat Map');
    this.rest.getHeatMap().subscribe(
      (response: any) => this.handleResponse(response),
      (error: any) => console.log(error)
    );
  }

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

  createAlert(rel: {'id': number, 'type': string, 'message': string}) {
    this.alerts.push(rel);
  }

  closeAlert(alert: {'id': number, 'type': string, 'message': string}) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
    if (this.alerts.length === 0) {
      this.i = 0;
    }
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

  isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }

  isDisabled(date: NgbDateStruct, current: {month: number}) {
    return date.month !== current.month;
  }
}
