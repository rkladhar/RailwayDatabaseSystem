import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { CreateNewUserComponent } from './create-new-user/create-new-user.component';
import { HomePageComponent } from './home-page/home-page.component';
import {DropdownModule} from 'primeng/dropdown';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import { HeaderComponent } from './header/header.component';
import { BookTicketsComponent } from './book-tickets/book-tickets.component';
import { TrainListComponent } from './train-list/train-list.component';
import { ViewBookingsComponent } from './view-bookings/view-bookings.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateNewUserComponent,
    HomePageComponent,
    HeaderComponent,
    BookTicketsComponent,
    TrainListComponent,
    ViewBookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DropdownModule,
    AutoCompleteModule,
    BrowserAnimationsModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
