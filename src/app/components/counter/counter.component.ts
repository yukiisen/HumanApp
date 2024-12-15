import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
    lastEdit = this.Storage.getTimer.bind(this.Storage);
    interval: number = 0;

    constructor (private Storage: StorageService) {}

    ngOnInit (): void {
        setInterval(() => { this.interval++ }, 1000);
    }
}
