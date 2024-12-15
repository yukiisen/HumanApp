import { Component } from '@angular/core';
import { DialogManagerService } from './services/dialogmanager.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    displayDialogue = false;
    currentDialog = '';

    constructor (private Dialogs: DialogManagerService) {
        Dialogs.childCall.subscribe(() => {
            setTimeout(() => { this.displayDialogue = false; this.currentDialog = '' }, 100);
        });
    }

    showDialogue (name: string) {
        this.currentDialog = name;
        this.displayDialogue = true;
        setTimeout(() => this.Dialogs.display(name), 100);
    }

    onCounterReset () {
        this.showDialogue('reset');
    }
}
