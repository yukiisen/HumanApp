import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CounterComponent } from './components/counter/counter.component';
// Pipes
import { PeriodPipe } from './pipes/period.pipe';
// Services
import { StorageService } from './services/storage.service';
import { ControlsComponent } from './components/controls/controls.component';
import { ResetComponent } from './components/dialog/reset/reset.component';
import { MentalStateComponent } from './components/helpers/mental-state/mental-state.component'

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        CounterComponent,
        PeriodPipe,
        ControlsComponent,
        ResetComponent,
        MentalStateComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [
        StorageService,
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
