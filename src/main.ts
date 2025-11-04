import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { StatusListComponent } from './phaseI/status-list/status-list.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, StatusListComponent],
  template: `
    <status-list></status-list>
  `
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
