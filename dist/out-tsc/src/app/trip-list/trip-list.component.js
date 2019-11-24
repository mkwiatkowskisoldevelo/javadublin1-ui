import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let TripListComponent = class TripListComponent {
    // http: HttpClient;
    // constructor(http: HttpClient) {
    //   this.http = http;
    // }
    constructor(http) {
        this.http = http;
        // pozniej wystawiamy zmienne, ktore beda dostepne w wwwwwwwwwwwwwwwwwwy6
        this.tripListTitle = "Trip List";
        this.displayedColumns = ['id', 'departureDate', 'returnDate'];
    }
    ngOnInit() {
        // this.trips = [];
        // this.trips.push(new Trip(1, 'trip1', 4, '2019-10-01'));
        // this.trips.push(new Trip(2, 'trip2', 7, '2019-10-02'));
        // this.trips.push(new Trip(3, 'trip3', 5, '2019-10-03'));
        // this.trips.push(new Trip(4, 'trip4', 2, '2019-10-04'));
        this.http.get('http://34.248.11.100:8080/trips')
            .subscribe(response => {
            this.trips = response;
            console.log('RESPONSE');
            console.log(response);
        });
        console.log('LALALA');
    }
};
TripListComponent = tslib_1.__decorate([
    Component({
        // mowi, jak uzyc componentu w html, <app-trip-list></app-trip-list>
        selector: 'app-trip-list',
        // ponizej definujemy html ktory wykorzysta component
        templateUrl: './trip-list.component.html',
        // tutaj definiujemy styl specyficzny dla componentu, przewaznie starczy 1, mozna wiecej
        styleUrls: ['./trip-list.component.scss']
    })
], TripListComponent);
export { TripListComponent };
//# sourceMappingURL=trip-list.component.js.map