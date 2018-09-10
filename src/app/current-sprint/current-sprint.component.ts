import { Component} from '@angular/core';
import {CurrentSprintService} from '../services/currentSprint.service';
import {RelabelSprintService} from '../services/relabelSprint.service';

@Component({
  selector: 'app-current-sprint',
  templateUrl: './current-sprint.component.html',
  styleUrls: ['./current-sprint.component.css']
})
export class CurrentSprintComponent {

  constructor(private cs: CurrentSprintService,
              private rl: RelabelSprintService) { }

  getShow() {
    return this.cs.show && !this.rl.show;
  }

  getSprint() {
    return this.cs.sprint;
  }

  relab(relabel: HTMLInputElement) {
    console.log(relabel.value);
    console.log(relabel.id);
  }

}
