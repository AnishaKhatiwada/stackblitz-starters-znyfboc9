import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { StatusColor } from './status/status';
import { CommonModule } from '@angular/common';
import { StatusMappingPipe } from './status/status-mapping.pipe';

@Component({
  selector: 'app-root',
  imports: [StatusColor, CommonModule, StatusMappingPipe],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <ng-container *ngFor="let status of statusList">
    <status [status]="status.value | statusMapping"> {{status.key}} </status>
    </ng-container>
  `,
})
export class App {
  name = 'Angular';

  statusList = [
    {
      key: "Pass",
      value: "success"
    },
    {
      key: "Fail",
      value: "error"
    },
    {
      key: "Pending",
      value: "warn"
    },
    {
      key: "Canceled",
      value: "PENDING"
    }
  ]
}

bootstrapApplication(App);
