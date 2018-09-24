import { Component, Input } from '@angular/core';
import {RestService} from '../services/rest.service';
import {InstanceCountService} from '../services/instanceCount.service';
import {HeatMapService} from '../services/heatmap.service';
import {ProjectService} from '../services/projects.services';
import {AddProjectComponent} from '../add-project/add-project.component';
import {DialogService} from 'ng2-bootstrap-modal';

@Component ({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent {

  constructor(private rest: RestService,
              private instService: InstanceCountService,
              private hm: HeatMapService,
              private pr: ProjectService,
              private dialogService: DialogService) { }

  getCurrentProject() {
    return this.pr.getCurrent();
  }

  showConfirm() {
    const disposable = this.dialogService.addDialog(AddProjectComponent, {
      title: 'Add Project',
      message: 'Please add project title and description'})
      .subscribe((isConfirmed) => {
        if (isConfirmed) {
          this.pr.clearInstance();
          this.rest.getProjects().subscribe(
            (response: any) => console.log(response),
            (error: any) => console.log(error)
          );
        }
      });
  }

}
