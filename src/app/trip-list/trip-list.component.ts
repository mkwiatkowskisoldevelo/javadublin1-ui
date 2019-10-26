import { Component, OnInit } from '@angular/core';
import { Trip } from '../domain/trip';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent implements OnInit {

  tripListTitle: string = "Trip List";
  displayedColumns: string[] = ['id', 'departureDate', 'returnDate'];
  trips: Trip[];
  tripsResponse: any;

  // http: HttpClient;

  // constructor(http: HttpClient) {
  //   this.http = http;
  // }

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.trips = [];
    // this.trips.push(new Trip(1, 'trip1', 4, '2019-10-01'));
    // this.trips.push(new Trip(2, 'trip2', 7, '2019-10-02'));
    // this.trips.push(new Trip(3, 'trip3', 5, '2019-10-03'));
    // this.trips.push(new Trip(4, 'trip4', 2, '2019-10-04'));
    this.http.get<Trip[]>('http://localhost:8080/trips')
      .subscribe(response => {
        this.trips = response;
        console.log('RESPONSE');
        console.log(response);
      });

    console.log('LALALA');
  }

}
