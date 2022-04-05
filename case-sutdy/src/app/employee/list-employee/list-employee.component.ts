import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  emp = [
    {name: 'Sơn DƯơng',
      dateOfBirth: '26/02/1998',
      idCard: '2222222',
      phoneNumber: '02033365',
      position: 'Lễ Tân'
    },
    {name: 'Hảo',
      dateOfBirth: '26/02/1998',
      idCard: '2222222',
      phoneNumber: '02033365',
      position: 'Buồng phòng'
    },
    {name: 'Tuấn vũ',
      dateOfBirth: '26/02/1998',
      idCard: '2222222',
      phoneNumber: '02033365',
      position: 'Bảo vệ'
    }
    ,
    {name: 'Uyển Nhi',
      dateOfBirth: '26/02/1998',
      idCard: '2222222',
      phoneNumber: '02033365',
      position: 'Giám đốc'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
