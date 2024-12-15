import { Component, ElementRef, Output, ViewChild } from '@angular/core';
import { Dialog } from 'src/app/interfaces/dialog';
import { DialogManagerService } from 'src/app/services/dialogmanager.service';

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

    constructor (private Dialogs: DialogManagerService) {
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
}
