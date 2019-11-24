import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TripListComponent } from './trip-list/trip-list.component';
import { HttpClientModule } from '@angular/common/http';

import { MatTableModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatToolbarModule, MatMenuModule, MatIconModule } from '@angular/material';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { TripCreateComponent } from './trip-create/trip-create.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'trips',
    component: TripListComponent
  },
  {
    path: 'trips/create',
    component: TripCreateComponent
  }
];

@NgModule({
  // nizej podajemy liste componentow z naszej aplikacji,
  // gdy uzywamy "ng generate component nazwa-componentu" same dodaja sie do ponizeszj listy 
  declarations: [
    AppComponent,
    TripListComponent,
    TripDetailsComponent,
    TripCreateComponent,
    HomePageComponent,
    NavMenuComponent
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
    FormsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
