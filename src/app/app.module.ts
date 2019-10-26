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

@NgModule({
  declarations: [
    AppComponent,
    TripListComponent,
    TripDetailsComponent,
    TripCreateComponent
  ],
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
export class AppModule { }
