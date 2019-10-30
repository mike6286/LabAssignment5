import { Component, OnInit } from '@angular/core';

interface IStudent {
  id: number;
  firstName: string;
  lastName: string;
  course: string;
  editMode: boolean;
}
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {


  studentArray: Array<IStudent> = [];
  disableAddButton = false;
  constructor() { }

  ngOnInit() {
    this.studentArray = [
      {
        id: 1,
        firstName: 'Michael',
        lastName: 'GilletteBerg',
        course: 'Programming',
        editMode: false
      },
      {
        id: 2,
        firstName: 'Travis',
        lastName: 'Scottland',
        course: 'Music',
        editMode: false
      },
      {
        id: 3,
        firstName: 'Connor',
        lastName: 'McGregor',
        course: 'Fight Club',
        editMode: false
      }
    ];
  }

  addStudent() {
    this.studentArray.unshift({
      id: null,
      firstName: null,
      lastName: null,
      course: null,
      editMode: true
    });
    this.disableAddButton = true;
  }

  removeStudent(index: number) {
    console.log('index---->', index);
    this.studentArray.splice(index, 1);
  }

  saveStudent() {
    this.studentArray[0].editMode = false;
    this.disableAddButton = false;
  }

}
