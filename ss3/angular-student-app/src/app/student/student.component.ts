import { Component, OnInit } from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student: Student = {
    id : 1,
    name: 'Son',
    address: 'Quang Binh',
    age: 8,
    mark: 9
  };
  constructor() { }

  ngOnInit() {
  }

  color: string = 'red';
}
