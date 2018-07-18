import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {InstanceCountService} from './instanceCount.service';
import {CompletedDownloadsService} from './completedDownloads.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {HeatMapService} from './heatmap.service';
import {CurrentSprintService} from './currentSprint.service';

@Injectable()
export class RestService {
  constructor(private http: HttpClient,
              private instServ: InstanceCountService,
              private compDownService: CompletedDownloadsService,
              private spinnerService: Ng4LoadingSpinnerService,
              private hm: HeatMapService,
              private cs: CurrentSprintService) {}

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
      this.cs.addInstance({'Issue': arr[0], 'Summary': arr[1], 'Description': arr[2], 'Label': arr[4]});
    }
  }

  getHeatMap() {
    console.log('in heat map');
    this.hm.clearInstance()
    this.spinnerService.show();
    console.log('past spinner');
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
    this.cs.clearInstance()
    this.spinnerService.show();
    return this.http.get('http://127.0.0.1:5000/sprint').map(
      response => {
        this.processCurrentSprint(response);
        this.cs.setShow(true);
        this.spinnerService.hide();
      }
    );
  }
}
