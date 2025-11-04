import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'nav',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './nav.component.html',
    host: {
        class: 'nav'
    }
})
export class NavComponent {
 
}