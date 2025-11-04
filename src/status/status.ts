import { Directive, HostBinding, Input } from '@angular/core';

export enum StatusValues {
  SUCCESS = 'success',
  WARN = 'warn',
  ERROR = 'error',
  DEFAULT = 'default'
}

@Directive({
  selector: 'status',
  standalone: true,
  host: {
    class: 'status'
  }
})
export class StatusColor {
  @Input()
  status: StatusValues | string = StatusValues.DEFAULT;

  @HostBinding('class.status--success')
  get success() {
    return this.status === StatusValues.SUCCESS;
  }

  @HostBinding('class.status--warn')
  get warn() {
    return this.status === StatusValues.WARN;
  }

  @HostBinding('class.status--error')
  get error() {
    return this.status === StatusValues.ERROR;
  }

  @HostBinding('class.status--default')
  get default() {
    return this.status === StatusValues.DEFAULT;
  }
}
