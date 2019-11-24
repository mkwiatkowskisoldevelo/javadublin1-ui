import { Component, OnInit } from '@angular/core';
import { Trip } from '../domain/trip';
import { Catering } from '../domain/catering.enum';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-create',
  templateUrl: './trip-create.component.html',
  styleUrls: ['./trip-create.component.scss']
})
export class TripCreateComponent implements OnInit {

  // public adultPlacesAvailable: number;
  public trip: Trip;
  public caterings: Catering[];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getCateringLabel('BB');
    this.trip = new Trip();
    this.caterings = Object.keys(Catering)
      .map(key => Catering[key])
      .filter(x => typeof x !== 'number');
    // this.trip.adultPlacesAvailable = 10;
  }

  // change() {
  //   console.log(this.adultPlacesAvailable);
  // }

  save() {
    console.log(this.trip);
    this.http.post('http://34.248.11.100:8080/trips', this.trip)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['trips']);
      });
  }

  getCateringLabel(catering) {
    // let label: string;
    // switch (Catering[catering]) {
    //   case Catering.BB:
    //     label = 'Bed and breakfast';
    //     break;
    //   case Catering.AI:
    //     label = 'All inclusive';
    //     break;
    //   case Catering.FB:
    //     label = 'Full board';
    //     break;
    //   case Catering.HB:
    //     label = 'Half board';
    //     break;
    //   case Catering.OV:
    //     label = 'Over-night';
    //     break;
    //   case Catering.PP:
    //     label = 'Program package';
    //     break;
    //   case Catering.SC:
    //     label = 'Self catering';
    //     break;
    //   default:
    //     label = '';
    //     break;
    // }
    return catering;
  }
}
