import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CounterComponent } from './components/counter/counter.component';

import { ControlsComponent } from './components/controls/controls.component';
import { ResetComponent } from './components/dialog/reset/reset.component';
import { MentalStateComponent } from './components/helpers/mental-state/mental-state.component';
// Pipes
import { PeriodPipe } from './pipes/period.pipe';
// Services
import { StorageService } from './services/storage.service';
import { DialogManagerService } from './services/dialogmanager.service';
import { DailyCheckComponent } from './components/dialog/daily-check/daily-check.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        CounterComponent,
        PeriodPipe,
        ControlsComponent,
        ResetComponent,
        MentalStateComponent,
        DailyCheckComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [
        StorageService,
        DialogManagerService,
        { 
            provide: APP_INITIALIZER, 
            useFactory: (service: StorageService) => { return () => service; }, 
            deps: [ StorageService ], 
            multi: true 
        }
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
