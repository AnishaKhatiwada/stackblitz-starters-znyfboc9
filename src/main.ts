import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { StatusColor } from './status/status';

@Component({
  selector: 'app-root',
  imports: [StatusColor],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>

    <status status="success"> Success </status>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
