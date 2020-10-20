import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {RailwayDatabaseService} from "../railway-database.service";
import {UserCredentials} from "../login/login.component";

@Component({
  selector: 'app-create-new-user',
  templateUrl: './create-new-user.component.html',
  styleUrls: ['./create-new-user.component.css']
})
export class CreateNewUserComponent implements OnInit {

  userDetails: UserDetails = new UserDetails();
  submitted = false;
  errorCreatingUser = false;
  constructor(private router: Router, private railwayDatabaseService: RailwayDatabaseService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.submitted = true;
    this.railwayDatabaseService.createNewUser(this.userDetails).subscribe(data =>{
      if(data == "success"){
        this.gotoLoginPage();
      }
      else{
        this.errorCreatingUser = true;
      }
    });
  }

  gotoLoginPage(){
    this.router.navigate(['/railway/database/system']);
  }

}

export class UserDetails
{
  emailId: string;
  phoneNo: number;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  userName: string;
  password: string;
}
