import { Component} from '@angular/core';
import {CurrentSprintService} from '../services/currentSprint.service';

@Component({
  selector: 'app-current-sprint',
  templateUrl: './current-sprint.component.html',
  styleUrls: ['./current-sprint.component.css']
})
export class CurrentSprintComponent {

  constructor(private cs: CurrentSprintService) { }

  getShow() {
    return this.cs.show;
  }

  getSprint() {
    return this.cs.sprint;
  }

}
