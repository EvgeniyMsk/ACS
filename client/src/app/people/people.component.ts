import { Component, OnInit } from '@angular/core';
import {PeopleService} from "../service/people.service";
import {Person} from "../models/Person";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people : Person[];
  displayedColumns: string[] = ['Организация', 'Персона', 'Дата рождения', 'Паспорт', 'Место рождения', 'Допущен', 'Дата проверки', 'Документ', 'Дата'];

  constructor(private peopleService : PeopleService) { }

  ngOnInit(): void {
    this.peopleService.getAllUsers()
      .subscribe(data => {
        this.people = data;
        console.log(data)
        }
      )
  }



}
