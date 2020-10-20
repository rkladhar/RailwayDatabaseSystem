import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SelectItem} from "primeng/api";
import {RailwayDatabaseService} from "../railway-database.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  trainSearch: TrainSearch = new TrainSearch();
  station: Station = new Station();
  results: any[] = [];
  noOfPassengers: SelectItem[];
  minDate: Date;
  stationList: Station[] = [];
  submitted = false;

  constructor(private railwayDatabaseService: RailwayDatabaseService, private router: Router) {
    this.noOfPassengers = [
      {label: '1', value: 1},
      {label: '2', value: 2}
    ];
  }

  ngOnInit() {
    this.minDate = new Date();
  }

  onSubmit(){
    this.submitted = true;
    this.railwayDatabaseService.departureStation = this.trainSearch.departureStation;
    this.railwayDatabaseService.arrivalStation = this.trainSearch.arrivalStation;
    this.railwayDatabaseService.noOfPassengers = this.trainSearch.noOfPassengers;
    this.railwayDatabaseService.dateOfJourney = this.trainSearch.dateOfJourney.toISOString();
    this.router.navigate(['/train-list']);

  }

  search(event) {
    this.railwayDatabaseService.getStationList(event.query).subscribe(data => {
      this.stationList = data;
      this.results = this.stationList.filter(station => station.stationName.startsWith(event.query));
    });
  }

}

export class TrainSearch
{
  departureStation: Station = new Station();
  arrivalStation: Station = new Station();
  dateOfJourney: Date;
  noOfPassengers: number = 1;
}

export class Station
{
  stationId: number;
  stationName: string;
}
