import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    genders: string [] = [];
    firstName: string = '';
    lastName: string = '';
    userName: string = '';
    emaill: string = '';
    passWord: string = '';
    // rePassWord: string = '' ;
    dateOfBirth:string = '';
    adderSS : string = '';
    countrY: string = '';
    citY: string = '';
    phonE: string = '';
    bioo : string = '';
    isLoadedForm : boolean = false;
  constructor( private  authService: AuthService,
               private userService: UserService ,
               private router : Router) {
      this.genders = ["Male","Female","Other"];
  }

  ngOnInit() {
  }

    onClickRegisterHandler(reisterForm) {


    let data = reisterForm.value;
    console.log(data);
    this.authService.signup(data.email, data.password).then(result => {
        this.userService.addNewUser(result.user.uid,data.firstname,
            data.lastname,data.username,data.email,data.birth)}).then(()=>{
                this.router.navigate(["/"])

    }).catch(error => console.log(error));

    // this.isLoadedForm = true;
    // setTimeout(()=>{
    //   this.isLoadedForm = false;
    // },3000);

    }
}
