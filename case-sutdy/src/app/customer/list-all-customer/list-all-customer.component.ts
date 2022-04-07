import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-all-customer',
  templateUrl: './list-all-customer.component.html',
  styleUrls: ['./list-all-customer.component.css']
})
export class ListAllCustomerComponent implements OnInit {
  customerList = [
    {
      fullName: 'Sơn Dương',
      dateOfBirth: '26/02/1998',
      gender: 'nam',
      customerType: 'Menber',
      customerAdress: 'Quảng Bình',
    },
    {
      fullName: 'QUốc Tấn Dương',
      dateOfBirth: '23/12/1995',
      gender: 'nam',
      customerType: 'Menber',
      customerAdress: 'Đà Nẵng',
    },
    {
      fullName: 'Nữ Hồ',
      dateOfBirth: '21/11/1992',
      gender: 'Nữ',
      customerType: 'Menber',
      customerAdress: 'Quảng Ngãi',
    },
    {
      fullName: 'Quốc Trung',
      dateOfBirth: '02/11/1998',
      gender: 'nam',
      customerType: 'Gold',
      customerAdress: 'Quy Nhơn',
    },
    {
      fullName: 'Mỹ Tâm',
      dateOfBirth: '07/03/1991',
      gender: 'nữ',
      customerType: 'Silver',
      customerAdress: 'Hà Nội',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
