import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'platform'
})
export class DialogManagerService {
    manager = new EventEmitter<string>();
    childCall = new EventEmitter;
    constructor() {}

    display (name: string) {
        this.manager.emit(name);
    }

    hide () {
        this.childCall.emit();
    }
}
