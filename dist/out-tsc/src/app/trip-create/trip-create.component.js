import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Trip } from '../domain/trip';
let TripCreateComponent = class TripCreateComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        this.trip = new Trip();
        // this.adultPlacesAvailable = 10;
    }
    // change() {
    //   console.log(this.adultPlacesAvailable);
    // }
    save() {
        console.log(this.trip);
        this.http.post('http://localhost:8080/trips', this.trip)
            .subscribe(response => {
            console.log(response);
        });
    }
};
TripCreateComponent = tslib_1.__decorate([
    Component({
        selector: 'app-trip-create',
        templateUrl: './trip-create.component.html',
        styleUrls: ['./trip-create.component.scss']
    })
], TripCreateComponent);
export { TripCreateComponent };
//# sourceMappingURL=trip-create.component.js.map