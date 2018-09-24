import { Component } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import {RestService} from '../services/rest.service';
export interface ConfirmModel {
  title: string;
  message: string;
}
@Component({
  selector: 'confirm',
  template: `<div class="modal-dialog">
                <div class="modal-content">
                   <div class="modal-header">
                     <h4 class="modal-title">{{title || 'Confirm'}}</h4>
                     <button type="button" class="close" (click)="close()" >&times;</button>
                   </div>
                   <div class="modal-body">
                     <p>{{message || 'Are you sure?'}}</p>
                     <div class="form-group">
                       <label for="exampleInputEmail1">Project Title:</label>
                       <input type="input" class="form-control" id="ProjectTitle" #pro>
                     </div>
                     <div class="form-group">
                       <label for="exampleInputPassword1">Project Description</label>
                       <input type="text" class="form-control" id="ProDesc" #desc>
                     </div>
                   </div>
                   <div class="modal-footer">
                     <button type="button" class="btn btn-primary" (click)="confirm(pro, desc)">OK</button>
                     <button type="button" class="btn btn-default" (click)="close()" >Cancel</button>
                   </div>
                 </div>
              </div>`
})
export class AddProjectComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {

  title: string;
  message: string;
  constructor(dialogService: DialogService,
              private rest: RestService) {
    super(dialogService);
  }
  confirm(Pro: HTMLInputElement, desc: HTMLInputElement) {
    // we set dialog result as true on click on confirm button,
    // then we can get dialog result from caller code
    this.rest.putNewProject(Pro.value, desc.value).subscribe(
      (response: any) => console.log(response),
      (error: any) => console.log(error)
    );
    this.result = true;
    this.close();
  }
}
