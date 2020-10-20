import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {RailwayDatabaseService} from "../railway-database.service";

@Component({
  selector: 'app-book-tickets',
  templateUrl: './book-tickets.component.html',
  styleUrls: ['./book-tickets.component.css']
})
export class BookTicketsComponent implements OnInit {

  passenger1: Passenger = new Passenger();
  passenger2: Passenger = new Passenger();
  date: Date = new Date();
  passengerList: Array<Passenger> = new Array<Passenger>();
  ticketInformation: TicketInformation = new TicketInformation();
  submitted = false;

  constructor(private router: Router, private railwayDatabaseService: RailwayDatabaseService) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.railwayDatabaseService.noOfPassengers == 2){
      this.passengerList.push(this.passenger1);
      this.passengerList.push(this.passenger2);
    }
    else{
      this.passengerList.push(this.passenger1);
    }

    let data = {
      "dateOfBooking": this.date.toISOString(),
      "dateOfJourney": this.railwayDatabaseService.dateOfJourney,
      "trainNo": this.railwayDatabaseService.trainNo,
      "userId": this.railwayDatabaseService.userId,
      "passengerInformationList": this.passengerList
    }
    this.railwayDatabaseService.bookTickets(data).subscribe(data =>{
      if(data != null || data != undefined){
        this.submitted = true;
        this.ticketInformation.trainNo = data.trainNo;
        this.ticketInformation.ticketId = data.ticketId;
        this.ticketInformation.dateOfBooking = data.dateOfBooking;
        this.ticketInformation.departureStation = this.railwayDatabaseService.departureStation.stationName;
        this.ticketInformation.arrivalStation = this.railwayDatabaseService.arrivalStation.stationName;
        this.ticketInformation.departureTime = this.railwayDatabaseService.departureTime;
        this.ticketInformation.arrivalTime = this.railwayDatabaseService.arrivalTime;
        this.ticketInformation.dateOfJourney = this.railwayDatabaseService.dateOfJourney;
        this.ticketInformation.passengerList = this.passengerList;
      }

    })
  }

}
export class Passenger
{
  firstName: string;
  lastName: string;
  emailId: string;
  phoneNo: string;
  gender: string;
  age: number;
}

export class TicketInformation
{
  ticketId: number;
  trainNo: number;
  arrivalStation: string;
  departureStation: string;
  departureTime: string
  arrivalTime: string;
  dateOfBooking: string;
  dateOfJourney: string;
  passengerList: Array<Passenger> = new Array<Passenger>();
}
