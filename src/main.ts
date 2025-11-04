import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { StatusListComponent } from './phaseI/status-list/status-list.component';
import { PublicPageComponent } from './phaseII/public-page/public-page.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, PublicPageComponent],
  template: `
<public-page></public-page>
  `
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
