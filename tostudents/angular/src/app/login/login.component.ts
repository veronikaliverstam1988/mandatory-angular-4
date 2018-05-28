import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = {
    username: '',
    password: '',
};

constructor(authService: AuthService) {

  ngOnInit() {

  }
  login(credentials) {
    this.authService.login(this.credentials);
  }

}}


