import { Component, OnInit } from '@angular/core';
import { DialogManagerService } from './services/dialogmanager.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    displayDialogue = false;

    constructor (private Dialogs: DialogManagerService) {}

    ngOnInit (): void {
        
    }
}
