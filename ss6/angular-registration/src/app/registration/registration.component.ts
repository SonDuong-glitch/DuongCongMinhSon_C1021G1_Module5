import { Component, OnInit } from '@angular/core';
import {Registration} from '../registration';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registration: FormGroup;
  registrations: Registration[] = [{
    // email: 'sonduong@gmail.com',
    // password: '2621998',
    // confirmPassword: '2621998',
    // country: 'VietNam',
    // age: 18,
    // gender: 'nam',
    // phone: 363078878
  }
  ];
  constructor() { }

  ngOnInit() {
    this.registration = new FormGroup({
      email: new FormControl('', [Validators.pattern('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}'), Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      country: new FormControl('', [Validators.required , Validators.minLength(6)]),
      age: new FormControl('', [Validators.min(18)]),
      gender: new FormControl(''),
      phone: new FormControl('', Validators.pattern('(84|0[3|5|7|8|9])+([0-9]{8})\\b'))
    });
  }
  addNew() {
    this.registrations.push(this.registration.value);
    console.log(this.registration.value);
  }
  get email() {
    return this.registration.get('email');
  }
  get phoneNumber() {
    return this.registration.get('phone');
  }
  get pass() {
    return this.registration.get('password');
  }
  get age() {
    return this.registration.get('age');
  }
  onSubmit() {
    this.registrations.push(this.registration.value );
    console.log(this.registrations);
  }
}
