import { Component, OnInit } from '@angular/core';
import {TicketInformation} from "../book-tickets/book-tickets.component";
import {Router} from "@angular/router";
import {RailwayDatabaseService} from "../railway-database.service";

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css']
})
export class ViewBookingsComponent implements OnInit {

  bookings: Array<TicketInformation> = new Array<TicketInformation>();
  ticketInformation: TicketInformation = new TicketInformation();
  errorDeletingBooking = false;

  constructor(private router: Router, private railwayDatabaseService: RailwayDatabaseService) { }

  ngOnInit() {
    this.getBookingsList();
  }

  getBookingsList(){
    this.railwayDatabaseService.getBookingsList(this.railwayDatabaseService.userId).subscribe(data =>{
      if(data != null || data != undefined){
        for(let i=0; i<data.length; i++){
          let ticketInfo: TicketInformation = new TicketInformation();
          ticketInfo.trainNo = data[i].trainNo;
          ticketInfo.ticketId = data[i].ticketId;
          ticketInfo.dateOfBooking = data[i].dateOfBooking;
          ticketInfo.passengerList = data[i].passenger;
          this.ticketInformation = ticketInfo;
          this.bookings.push(this.ticketInformation);
        }
      }
    });
  }

  cancelExistingBooking(ticketId){
    this.railwayDatabaseService.cancelBooking(ticketId).subscribe(data =>{
      if(data == "success"){
        this.bookings = [];
        this.getBookingsList();
      }
      else{
        this.errorDeletingBooking = true;
      }
    });
  }

}
