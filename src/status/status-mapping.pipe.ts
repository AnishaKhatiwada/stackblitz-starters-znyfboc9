import { Pipe, PipeTransform } from '@angular/core';
import { StatusValues } from './status';

export enum ApiStatus {
    FAIL = 'FAIL',
    FAILURE = 'FAILURE',
    SUCCESS = 'SUCCESS',
    DONE = 'DONE',
    WARNING = 'WARNING',
    WARN = 'WARN',
    PENDING = 'PENDING'
}

@Pipe({
    standalone: true,
    name: 'statusMapping'
})
export class StatusMappingPipe implements PipeTransform {
    transform(status: string): StatusValues {
        switch (status?.toUpperCase()) {
            case ApiStatus.SUCCESS:
            case ApiStatus.DONE:
                return StatusValues.SUCCESS;

            case ApiStatus.FAIL:
            case ApiStatus.FAILURE:
                return StatusValues.ERROR;

            case ApiStatus.WARNING:
            case ApiStatus.WARN:
            case ApiStatus.PENDING:
                return StatusValues.WARN;

            default:
                return StatusValues.WARN;
        }
    }
}
