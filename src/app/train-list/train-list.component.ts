import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {RailwayDatabaseService} from "../railway-database.service";
import {Station} from "../home-page/home-page.component";

@Component({
  selector: 'app-train-list',
  templateUrl: './train-list.component.html',
  styleUrls: ['./train-list.component.css']
})
export class TrainListComponent implements OnInit {

  trainInfos: Array<TrainInfo> = new Array<TrainInfo>();
  trainInfo: TrainInfo = new TrainInfo();

  constructor(private router: Router, private railwayDatabaseService: RailwayDatabaseService) { }

  ngOnInit() {
    this.getTrainList();
  }

  getTrainList(){
    this.railwayDatabaseService.getTrainList(this.railwayDatabaseService.departureStation.stationId,
      this.railwayDatabaseService.arrivalStation.stationId, this.railwayDatabaseService.dateOfJourney).subscribe(data =>{
        if(data != null || data != undefined){
          for(let i=0; i<data.length; i++){
            let train: TrainInfo = new TrainInfo();
            train.trainNo = data[i].trainNo;
            train.trainName = data[i].trainName;
            train.departureStation = this.railwayDatabaseService.departureStation.stationName;
            train.arrivalStation = this.railwayDatabaseService.arrivalStation.stationName;
            train.departureTime = data[i].departureTime;
            train.arrivalTime = data[i].arrivalTime;
            train.availableSeats = data[i].availableSeats;
            train.ticketPrice = data[i].ticketPrice;
            train.dateOfJourney = data[i].dateOfJourney;
            this.trainInfo = train;
            this.trainInfos.push(this.trainInfo);
          }
        }
    })
  }

  goToBookingPage(trainNo, departureTime, arrivalTime){
    this.railwayDatabaseService.trainNo = trainNo;
    this.router.navigate(['/book-tickets']);
  }

}

export class TrainInfo
{
  trainNo: number;
  trainName: string;
  departureStation: string;
  arrivalStation: string;
  departureTime: string;
  arrivalTime: string;
  availableSeats: number;
  ticketPrice: number;
  dateOfJourney: string;
}

