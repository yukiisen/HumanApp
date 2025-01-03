import { Component } from '@angular/core';
import { Dialog } from 'src/app/interfaces/dialog';
import { DialogManagerService } from 'src/app/services/dialogmanager.service';
import { StorageService } from 'src/app/services/storage.service';
import { MentalState } from '../../helpers/mental-state/mental-state.component';

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
    state!: string;
    amount: number = 5;

    constructor (private Dialogs: DialogManagerService, private Storage: StorageService) {
        Dialogs.manager.subscribe((name) => {
            if (name === this.name) this.visible = true;
        });
    }

    ngOnDestroy(): void {
        this.Dialogs.unsubscribeChild();
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

    populateAmount (e: Event) {
        this.amount = +(<{ value: string }><unknown>e.target).value;
    }

    saveData () {
        if (!this.Storage.todayState()) {
            this.Storage.insertDaily({ state: <MentalState>this.state, amount: this.amount, date: new Date() });
        }

        this.hostClick();
    }
}
