import { Component, Input } from '@angular/core';
import {RestService} from '../services/rest.service';
import {InstanceCountService} from '../services/instanceCount.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {HeatMapService} from '../services/heatmap.service';
import {ProjectService} from '../services/projects.services';

@Component ({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent {

  constructor(private rest: RestService,
              private instService: InstanceCountService,
              private hm: HeatMapService,
              private pr: ProjectService) { }

  getCurrentProject() {
    return this.pr.getCurrent();
  }
}
