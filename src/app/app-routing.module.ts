import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {CreateNewUserComponent} from "./create-new-user/create-new-user.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {HeaderComponent} from "./header/header.component";
import {TrainListComponent} from "./train-list/train-list.component";
import {BookTicketsComponent} from "./book-tickets/book-tickets.component";
import {ViewBookingsComponent} from "./view-bookings/view-bookings.component";

const routes: Routes = [
  { path: '', redirectTo: 'railway/database/system', pathMatch: 'full' },
  { path: 'railway/database/system', component: LoginComponent },
  { path: 'header', component: HeaderComponent},
  { path: 'home-page', component: HomePageComponent},
  { path: 'create-new-user', component: CreateNewUserComponent},
  { path: 'train-list', component: TrainListComponent},
  { path: 'book-tickets', component: BookTicketsComponent},
  { path: 'ticket-history', component: ViewBookingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
