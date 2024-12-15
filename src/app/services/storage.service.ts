import { Injectable } from '@angular/core';
import { MentalState } from '../components/helpers/mental-state/mental-state.component';

export type Reason = "watched" | "accident" | "onPurpose";

export interface StorageStructure {
    password: string,
    resets: {
        date: Date,
        time?: Date, 
        state: MentalState,
        //penality: number,
        reason: Reason,
    }[],
    dailyState: { date: Date, state: MentalState, amount: number }[],
    notes: { date: Date, content: string }[]
}

type ExtractFromArray<T> = T extends (infer K)[]? K : never;

@Injectable({
    providedIn: 'platform'
})
export class StorageService {
    private appData!: StorageStructure;
    readonly storeToken = "humanapp";

    constructor() {
        if (!localStorage.getItem(this.storeToken)) { localStorage.setItem(this.storeToken, JSON.stringify(DefaultStorage)); }

        this.appData = Object.assign({}, JSON.parse(localStorage.getItem(this.storeToken)!));

        methods.map(this.appData.resets, _ => ({ ..._, date: new Date(_.date) }));
        methods.map(this.appData.notes, _ => ({ ..._, date: new Date(_.date) }));
        methods.map(this.appData.dailyState, _ => ({ ..._, date: new Date(_.date) }));
    }

    todayState () {
        if (this.appData.dailyState.length === 0) return false;
        const { date: lastRecord } = this.appData.dailyState[this.appData.dailyState.length - 1];
        const now = new Date;

        const sameDate = lastRecord.getDate() == now.getDate()
        const sameYear = lastRecord.getFullYear() === now.getFullYear()
        const sameMonth = lastRecord.getMonth() === now.getMonth()

        if (sameYear && sameMonth && sameDate) return true;
        else return false;
    }

    getHistory () {
        return this.appData.resets.concat();
    }

    insertDaily (data: ExtractFromArray<StorageStructure["dailyState"]>) {
        this.appData.dailyState.push(data);
        this.save();
    }

    resetTimer (data: ExtractFromArray<StorageStructure["resets"]>) {
        this.appData.resets.push(data);
        this.save();
    }

    getTimer () {
        return this.appData.resets.concat().pop()!.date;
    }

    save () {
        localStorage.setItem(this.storeToken, JSON.stringify(this.appData));
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
    resets: [
        { date: new Date, state: "normal", reason: "accident" }
    ],
    dailyState: [],
    notes: []
}