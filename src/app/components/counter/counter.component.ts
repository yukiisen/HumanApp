import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
    lastEdit: Date = new Date("2024-12-15 00:00");
    interval: number = 0;

    ngOnInit (): void {
        setInterval(() => { this.interval++ }, 1000);
    }
}
