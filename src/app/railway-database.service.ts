import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Station} from "./home-page/home-page.component";

@Injectable({
  providedIn: 'root'
})
export class RailwayDatabaseService {

  public userId: number;
  public departureStation: Station;
  public arrivalStation: Station;
  public noOfPassengers: number;
  public dateOfJourney: string;
  public trainNo: number;
  public departureTime: string;
  public arrivalTime: string;

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  login(userCredentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, userCredentials, {responseType: 'text'} );
  }

  createNewUser(userDetails: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, userDetails, {responseType: 'text'} );
  }

  getStationList(searchText: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/station-list`, {params: {searchText: searchText}})
  }

  getTrainList(departureStation, arrivalStation, dateOfJourney): Observable<any>{
    return this.http.get(`${this.baseUrl}/train-list`,
      {params: {departureStationId: departureStation, arrivalStationId: arrivalStation, dateOfJourney: dateOfJourney}})
  }

  bookTickets(data: any): Observable<any>{
    return this.http.post(`${this.baseUrl}/book/tickets`, data);
  }

  getBookingsList(userId: any): Observable<any>{
    return this.http.get(`${this.baseUrl}/get/bookings/list`, {params: {userId: userId}})
  }

  cancelBooking(ticketId: any): Observable<any>{
    const options = {
      params: {ticketId: ticketId},
      responseType: 'text' as 'json',
    };
    return this.http.delete(`${this.baseUrl}/cancel/booking`, options)
  }
}
