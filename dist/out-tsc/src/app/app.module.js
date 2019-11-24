import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TripListComponent } from './trip-list/trip-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatInputModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { TripCreateComponent } from './trip-create/trip-create.component';
import { FormsModule } from '@angular/forms';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        // nizej podajemy liste componentow z naszej aplikacji,
        // gdy uzywamy "ng generate component nazwa-componentu" same dodaja sie do ponizeszj listy 
        declarations: [
            AppComponent,
            TripListComponent,
            TripDetailsComponent,
            TripCreateComponent
        ],
        // w ponizszej liscie podajemy zalezne moduly, z ktorych bedziemy korzystac,
        // np. moduly z angular material 
        imports: [
            BrowserModule,
            AppRoutingModule,
            BrowserAnimationsModule,
            HttpClientModule,
            MatTableModule,
            MatFormFieldModule,
            MatSelectModule,
            MatOptionModule,
            MatInputModule,
            MatDatepickerModule,
            MatNativeDateModule,
            FormsModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map