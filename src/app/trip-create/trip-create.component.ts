import { Component, OnInit } from '@angular/core';
import { Trip } from '../domain/trip';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trip-create',
  templateUrl: './trip-create.component.html',
  styleUrls: ['./trip-create.component.scss']
})
export class TripCreateComponent implements OnInit {

  // public adultPlacesAvailable: number;
  public trip: Trip;

  constructor(private http: HttpClient) { }

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
}
