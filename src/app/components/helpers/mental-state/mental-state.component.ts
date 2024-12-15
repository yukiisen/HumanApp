import { Component } from '@angular/core';

export type MentalState = "happy" | "sad" | "guilty" | "normal" | "angry" | "lost" | "exhauseted" | "sick" | "passionate" | "unable to think" | "cheerful";

type MentalStateMap = {
    [key in MentalState]: string;
};

@Component({
    selector: 'app-mental-state',
    templateUrl: './mental-state.component.html',
    styleUrls: ['./mental-state.component.scss']
})
export class MentalStateComponent {
    mentalStateMap: MentalStateMap = {
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

    mentalStateList = Object.entries(this.mentalStateMap);
    selected = 1;

    handleClick (checked: string) {
        const option: MentalState = <MentalState>checked;
        this.selected = Object.keys(this.mentalStateMap).indexOf(option);
    }
}
