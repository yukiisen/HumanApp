import { Component, EventEmitter, Input, Output } from '@angular/core';

export type MentalState = "happy" | "sad" | "guilty" | "normal" | "angry" | "lost" | "exhauseted" | "sick" | "passionate" | "unable to think" | "cheerful";

type MentalStateMap = {
    [key in MentalState]: string;
};

type variant = {
    [key: string]: string
}

type Values<T> = T extends { [key: string]: infer V }? V : never;

@Component({
    selector: 'app-mental-state',
    templateUrl: './mental-state.component.html',
    styleUrls: ['./mental-state.component.scss']
})
export class MentalStateComponent {
    @Input('map') mentalStateMap: variant = {
        "angry": "غاضب",
        "cheerful": "مبتهج",
        "exhauseted": "مرهق",
        "guilty": "تشعر بالذنب",
        "happy": "سعيد",
        "lost": "حائر",
        "normal": "طبيعي",
        "passionate": "متحمس",
        "sad": "حزين",
        "sick": "مريض",
        "unable to think": "غير قادر على التفكير",
    }
    @Input() title = 'يرجى تحديد حالتك النفسية حاليا:';
    @Output() value = new EventEmitter<string>;
    mentalStateList: [string, string][] = [];
    selected = 1;

    ngOnInit () {
        this.mentalStateList = Object.entries(this.mentalStateMap);
    }

    handleClick (checked: string) {
        const option: MentalState = <MentalState>checked;
        this.selected = Object.keys(this.mentalStateMap).indexOf(option);
        this.value.next(Object.keys(this.mentalStateMap)[this.selected]);
    }
}
