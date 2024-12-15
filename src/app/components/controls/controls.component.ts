import { Component, EventEmitter, Output } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
    selector: 'app-controls',
    templateUrl: './controls.component.html',
    styleUrls: ['./controls.component.scss']
})
export class ControlsComponent {
    todayState = this.storage.todayState.bind(this.storage);
    @Output() reset = new EventEmitter<undefined>;
    @Output() dailyCheck = new EventEmitter<undefined>;

    constructor (private storage: StorageService) {}

    onReset () {
        this.reset.next(undefined);
    }

    onDailyCheckClick () {
        this.dailyCheck.next(undefined);
    }
}
