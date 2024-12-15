import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'period',
    pure: true
})
export class PeriodPipe implements PipeTransform {
    transform(va: any, value: Date) {
        const dur = new Duration(new Date(), value);

        if (dur.asYears() >= 1) return dur.asYears().toFixed(0) + " " + "سنة";
        else if (dur.asMonths() > 3) return dur.asMonths().toFixed(0) + " " + "شهر";
        else if (dur.asDays() > 1) return dur.asDays().toFixed(0) + " " + "يوم";
        else return (new Formatable(new Date(dur.asMilliSeconds()))).format("HH:mm:ss");
    }
}


class Duration {
    ms: number;
    constructor (date1: Date, date2: Date) { this.ms = date1.getTime() - date2.getTime() }

    asYears () { return this.ms / 1000 / 60 / 60 / 24 / 365.25; }
    asMonths () { return this.ms / 1000 / 60 / 60 / 24 / 30; }
    asDays () { return this.ms / 1000 / 60 / 60 / 24; }
    asHours () { return this.ms / 1000 / 60 / 60; }
    asMinutes () { return this.ms / 1000 / 60; }
    asSeconds () { return this.ms / 1000; }
    asMilliSeconds () { return this.ms; }
}

class Formatable {
    constructor (private date: Date) {}

    format (shema: string) {
        return shema
            .replaceAll("HH", this.addZero(this.date.getHours()))
            .replaceAll("mm", this.addZero(this.date.getMinutes()))
            .replaceAll("ss", this.addZero(this.date.getSeconds()))
            .replaceAll("A", this.date.getHours() > 12? "PM" : "AM")
            .replaceAll("hh", this.date.getHours() > 12? "PM" : "AM")
    }

    private addZero (value: number) {
        return value < 10? '0' + value.toString() : value.toString();
    }
}