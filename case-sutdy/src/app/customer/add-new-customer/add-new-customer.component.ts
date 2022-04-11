import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-new-customer',
  templateUrl: './add-new-customer.component.html',
  styleUrls: ['./add-new-customer.component.css']
})
export class AddNewCustomerComponent implements OnInit {
  name = ' ';
  date = ' ';
  gender = ' ';
  type = ' ';
  address = ' ';
  listCustomer = [
    {
      fullName: 'Sơn Dương',
      dateOfBirth: '26/02/1998',
      genderCustomer: 'nam',
      customerType: 'Menber',
      customerAdress: 'Quảng Bình',
    }
  ];
  customerType = [
    {
      type: 'Gold'
    },
    {
      type: 'Silver'
    },
    {
      type: 'Bronze'
    },
    {
      type: 'Member'
    }
  ];
  customerGender = [
    {
      gender: 'Nam'
    },
    {
    gender: 'Nữ'
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  addNewCustomer() {
  this.listCustomer.unshift({
      fullName: this.name,
      customerType: this.type,
      customerAdress: this.address,
      dateOfBirth: this.date,
      genderCustomer: this.gender
    });
  console.log(this.listCustomer);
  }
}
