import { Injectable } from '@angular/core';

type MentalState = "happy" | "sad" | "guilty" | "normal" | "angry" | "depressed" | "lost";

export interface StorageStructure {
    password: string,
    resets: {
        date: Date,
        time?: Date, 
        state: MentalState,
        penality: number
    }[],
    dailyState: { date: Date, state: MentalState }[],
    notes: { date: Date, content: string }[]
}

@Injectable({
    providedIn: 'platform'
})
export class StorageService {
    appData!: StorageStructure;
    readonly storeToken = "humanapp";

    constructor() {
        if (!localStorage.getItem(this.storeToken)) 
            localStorage.setItem(this.storeToken, JSON.stringify(DefaultStorage));

        this.appData = Object.assign({}, JSON.parse(localStorage.getItem(this.storeToken)!));

        methods.map(this.appData.resets, _ => ({ ..._, date: new Date(_.date) }));
        methods.map(this.appData.notes, _ => ({ ..._, date: new Date(_.date) }));
        methods.map(this.appData.dailyState, _ => ({ ..._, date: new Date(_.date) }));
    }
}

namespace methods {
    export function map <T>(array: T[], map: (e: T) => T): void {
        for (let i = 0; i < array.length; i++) {
            array[i] = map(array[i]);
        }
    }
}


const DefaultStorage: StorageStructure = {
    password: '',
    resets: [],
    dailyState: [],
    notes: [
        { date: new Date(), content: "" }
    ]
}