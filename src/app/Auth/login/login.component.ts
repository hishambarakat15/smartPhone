import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    userName: string = '';
    passWord: string = '';
    isFormLoaded: boolean = false;
  constructor( private router: Router , private authService:AuthService) { }

  ngOnInit() {
  }

    onClickFormHandler(loginForm) {

        let data = loginForm.value;
        console.log(data);
         this.authService.login(data.username,data.password).then(result=> console.log(result)).then(()=>{
            this.router.navigate(["/"])
        }).
        catch((err) => {
            console.log(err);
        let msg = err.message;
        console.log(msg);
        }
        );

    }
}
