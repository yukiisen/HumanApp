import { Component, ElementRef, Output, ViewChild } from '@angular/core';
import { Dialog } from 'src/app/interfaces/dialog';
import { DialogManagerService } from 'src/app/services/dialogmanager.service';
import { Reason, StorageService } from 'src/app/services/storage.service';
import { MentalState } from '../../helpers/mental-state/mental-state.component';

@Component({
    selector: 'app-reset',
    templateUrl: './reset.component.html',
    styleUrls: ['./reset.component.scss'],
    host: {
        '(click)': 'hostClick()'
    }
})
export class ResetComponent implements Dialog {
    visible = false;
    name = 'reset';
    willHide = false;

    accidentTypes = {
        'accident': 'حادثة غير مقصودة',
        'onPurpose': 'متعمدة',
        'watched': 'تشمل النظر',
    };

    state!: string;
    reason!: string;
    time?: Date;

    constructor (private Dialogs: DialogManagerService, private Storage: StorageService) {
        Dialogs.manager.subscribe((name) => {
            if (name === this.name) this.visible = true;
        });
    }

    ngOnDestroy(): void {
        this.Dialogs.unsubscribeChild();
    }

    hostClick () {
        if (this.willHide) {
            this.willHide = false;
        } else {
            this.visible = false;
            this.Dialogs.hide();
        }
    }

    divClick () {
        this.willHide = true;
    }

    populateTime (e: Event) {
        this.time = new Date((<{ value: string }><unknown>e.target).value || Date.now());
    }

    reset () {
        this.Storage.resetTimer({ date: new Date, time: this.time, state: <MentalState>this.state, reason: <Reason>this.reason  });
        this.hostClick();
    }
}
