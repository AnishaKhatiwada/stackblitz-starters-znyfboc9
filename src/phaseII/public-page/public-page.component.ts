import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';

@Component({
    selector: 'public-page',
    standalone: true,
    imports: [CommonModule, NavComponent],
    templateUrl: './public-page.component.html',
    host: {
        class: 'public-page'
    }
})
export class PublicPageComponent {
 
}