import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {InstanceCountService} from './instanceCount.service';
import {CompletedDownloadsService} from './completedDownloads.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {HeatMapService} from './heatmap.service';
import {CurrentSprintService} from './currentSprint.service';
import {RelabelSprintService} from './relabelSprint.service';

@Injectable()
export class RestService {
  constructor(private http: HttpClient,
              private instServ: InstanceCountService,
              private compDownService: CompletedDownloadsService,
              private spinnerService: Ng4LoadingSpinnerService,
              private hm: HeatMapService,
              private cs: CurrentSprintService,
              private rl: RelabelSprintService) {}

  processHeatMap(data: any) {
    const dataTransform: any[] = data;
    for (const arr of dataTransform)
    {
      this.hm.addInstance({data: Number(arr[1]), label: arr[0]});
    }
  }

  processCurrentSprint(data: any) {
    const dataTransform: any[] = data;
    for (const arr of dataTransform)
    {
      this.cs.addInstance({'Issue': arr[0], 'Summary': arr[1], 'Description': arr[3], 'Label': arr[4]});
    }
  }

  processRelabel(data: any) {
    const dataTransform: any[] = data;
    for (const arr of dataTransform)
    {
      this.rl.addInstance({'Issue': arr[0], 'Summary': arr[1], 'Description': arr[3], 'Label': arr[4]});
    }
  }

  processLabel(data: any) {
    for (const l of data) {
      if (l[0]) {
        this.rl.addLabel(l);
      }
    }
  }

  getHeatMap() {
    this.hm.clearInstance()
    this.spinnerService.show();
    return this.http.get('http://127.0.0.1:5000/heatmap').map(
      response => {
        this.processHeatMap(response);
        this.hm.setShow(true);
        this.spinnerService.hide();
      }
    );
  }

  getHeatMapKmeans() {
    this.hm.clearInstance();
    this.spinnerService.show();
    return this.http.get('http://127.0.0.1:5000/kmeans').map(
      response => {
        this.processHeatMap(response);
        this.hm.setShow(true);
        this.spinnerService.hide();
      }
    );
  }

  getCurrentSprint() {
    this.cs.clearInstance();
    this.spinnerService.show();
    return this.http.get('http://127.0.0.1:5000/sprint').map(
      response => {
        this.processCurrentSprint(response);
        this.cs.setShow(true);
        this.spinnerService.hide();
      }
    );
  }

  getUnlabelledSprint() {
    this.rl.clearInstance();
    this.spinnerService.show();
    return this.http.get('http://127.0.0.1:5000/relabel').map(
      response => {
        this.processRelabel(response);
        this.spinnerService.hide();
      }
    );
  }

  postRetrian(num) {
    this.spinnerService.show();
    return this.http.post('http://127.0.0.1:5000/retrain?cluster=' + num, null);
  }

  postRelabelSprint(ident, label) {
    return this.http.put('http://127.0.0.1:5000/label/' + ident + '?label=' + label, null);
  }

  getLabels() {
    this.spinnerService.show();
    return this.http.get('http://127.0.0.1:5000/labels').map(
      response => {
        this.processLabel(response);
        this.rl.setShow(true);
        this.spinnerService.hide();
      }
    );
  }
}
