import { Component, Input } from '@angular/core';
import { Dialog } from 'src/app/interfaces/dialog';
import { DialogManagerService } from 'src/app/services/dialogmanager.service';

@Component({
    selector: 'app-reset',
    templateUrl: './reset.component.html',
    styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements Dialog {
    visible = false;
    name = 'reset'

    constructor (private Dialogs: DialogManagerService) {
        Dialogs.manager.subscribe((name) => {
            if (name === this.name) this.visible = !this.visible;
        });
    }
}
