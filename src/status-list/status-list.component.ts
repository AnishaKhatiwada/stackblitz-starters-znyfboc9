import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusMappingPipe } from '../status/status-mapping.pipe';
import { StatusColor } from '../status/status';

@Component({
    selector: 'status-list',
    standalone: true,
    imports: [CommonModule, StatusColor, StatusMappingPipe],
    templateUrl: './status-list.component.html'
})
export class StatusListComponent {
    // @Input() statusList: { key: string; value: string }[] = [];

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
            key: "Not Verified",
            value: "NOT_VERIFIED"
        },
        {
            key: "Canceled",
            value: "PENDING"
        }
    ]
}