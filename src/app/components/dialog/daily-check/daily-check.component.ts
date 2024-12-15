import { Component } from '@angular/core';
import { Dialog } from 'src/app/interfaces/dialog';
import { DialogManagerService } from 'src/app/services/dialogmanager.service';

@Component({
    selector: 'app-daily-check',
    templateUrl: './daily-check.component.html',
    styleUrls: ['./daily-check.component.scss'],
    host: {
        '(click)': 'hostClick()'
    }
})
export class DailyCheckComponent implements Dialog {
    name = 'daily-check';
    visible = false;
    willHide = false;

    constructor (private Dialogs: DialogManagerService) {
        Dialogs.manager.subscribe((name) => {
            if (name === this.name) this.visible = true;
        });
    }

    hostClick(): void {
        if (this.willHide) {
            this.willHide = false;
        } else {
            this.visible = false;
            this.Dialogs.hide();
        }
    }

    divClick(): void {
        this.willHide = true;
    }
}
