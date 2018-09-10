import { Component, OnInit } from '@angular/core';
import {CurrentSprintService} from '../services/currentSprint.service';
import {RelabelSprintService} from '../services/relabelSprint.service';
import {RestService} from '../services/rest.service';

@Component({
  selector: 'app-relabel-sprint',
  templateUrl: './relabel-sprint.component.html',
  styleUrls: ['./relabel-sprint.component.css']
})
export class RelabelSprintComponent {

  constructor(private cs: CurrentSprintService,
              private rl: RelabelSprintService,
              private rest: RestService) { }

  getShow() {
    return this.rl.show;
  }

  getSprint() {
    return this.rl.sprint;
  }

  getLabel() {
    return this.rl.label;
  }

  relab(relabel: HTMLInputElement) {
    this.rl.removeItem(relabel.id);
    this.rest.postRelabelSprint(relabel.id, relabel.value).subscribe(
      (error: any) => console.log(error)
    );
  }

}
