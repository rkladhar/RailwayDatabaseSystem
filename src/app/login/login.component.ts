import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {RailwayDatabaseService} from "../railway-database.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userCredentials: UserCredentials = new UserCredentials();
  submitted = false;
  errorLoggingIn = false;

  constructor(private router: Router, private railwayDatabaseService: RailwayDatabaseService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.railwayDatabaseService.login(this.userCredentials).subscribe(data =>{
      if(data != null){
        this.railwayDatabaseService.userId = data;
        this.gotoHeaderPage();
      }
      else{
        this.errorLoggingIn = true;
      }
    });
  }

  gotoHeaderPage() {
    this.router.navigate(['/header']);
  }

  gotoCreateUserPage(){
    this.router.navigate(['/create-new-user']);
  }

}

export class UserCredentials
{
  userName: string;
  password: string;
}
