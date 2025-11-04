import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { StatusListComponent } from './status-list/status-list.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, StatusListComponent],
  template: `
    <h1>Hello from {{ name }}!</h1> 
    <status-list></status-list>
  `
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
