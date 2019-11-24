import { Component, OnInit } from '@angular/core';
import { Trip } from '../domain/trip';
import { HttpClient } from '@angular/common/http';

@Component({
  // mowi, jak uzyc componentu w html, <app-trip-list></app-trip-list>
  selector: 'app-trip-list',
  // ponizej definujemy html ktory wykorzysta component
  templateUrl: './trip-list.component.html',
  // tutaj definiujemy styl specyficzny dla componentu, przewaznie starczy 1, mozna wiecej
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent implements OnInit {

  // pozniej wystawiamy zmienne, ktore beda dostepne w htmlu
  tripListTitle: string = "Trip List";
  displayedColumns: string[] = ['id', 'departureDate', 'returnDate'];
  trips: Trip[];
  tripsResponse: any;

  // http: HttpClient;

  // constructor(http: HttpClient) {
  //   this.http = http;
  // }

  // w constructorze mozemy podac klasy, z ktorych chcemy skorzystac
  // dziala to podobnie do @Autowired w Spring'u
  constructor(private http: HttpClient) {}

  ngOnInit() {
    // pozniej zakomnentowane linijki byly po
    // this.trips = [];
    // this.trips.push(new Trip(1, 'trip1', 4, '2019-10-01'));
    // this.trips.push(new Trip(2, 'trip2', 7, '2019-10-02'));
    // this.trips.push(new Trip(3, 'trip3', 5, '2019-10-03'));
    // this.trips.push(new Trip(4, 'trip4', 2, '2019-10-04'));
    this.http.get<Trip[]>('http://172.31.23.54:8080/trips')
      .subscribe(response => {
        this.trips = response;
        console.log('RESPONSE');
        console.log(response);
      });

    console.log('LALALA');
  }

}
