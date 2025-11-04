import { Directive, HostBinding, Input } from '@angular/core';

export enum StatusValues {
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
}

@Directive({
  selector: 'status',
  standalone: true,
  host: {
    class: 'status',
  },
})
export class StatusColor {
  @Input()
  status: StatusValues | string = StatusValues.WARNING;

  @HostBinding('class.status--success')
  get success() {
    return this.status === StatusValues.SUCCESS;
  }

  @HostBinding('class.status--warning')
  get warning() {
    return this.status === StatusValues.WARNING;
  }

  @HostBinding('class.status--error')
  get error() {
    return this.status === StatusValues.ERROR;
  }
}
