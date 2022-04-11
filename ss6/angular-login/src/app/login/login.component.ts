import { Component, OnInit } from '@angular/core';
import {Login} from '../login';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  logins: Login[] = [];
  login = new FormGroup({
    userName: new FormControl('', [Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}'), Validators.required]),
    password: new FormControl('', [Validators.minLength(6), Validators.required])
  });
  constructor() {
  }
  ngOnInit() {
  }
  get userName() {
    return this.login.get('userName');
  }
  get password() {
    return this.login.get('password');
  }
  onSubmit() {
    this.logins.push(this.login.value);
    console.log(this.logins);
  }

}
