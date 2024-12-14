import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    host: {
        '[style.display]': '"flex"',
        '[style.justify-content]': '"left"',
    }
})
export class HeaderComponent {

}
