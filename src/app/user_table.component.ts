import { Component, VERSION, OnInit } from '@angular/core';
import { UserDataService, UserInfo } from './user-date.service';

@Component({
  selector: 'info-table',
  templateUrl: './user_table.component.html',
  styleUrls: []
})
export class TableComponent implements OnInit {
  table_value: UserInfo[];
  constructor(private user_service: UserDataService) {
    this.table_value= localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):[];
  }

delete(sr:number) {
  this.table_value.splice(sr, 1);
}

  ngOnInit() {
    this.user_service.userData.subscribe(tableValues => tableValues[0]?this.table_value.splice(0, this.table_value.length, ...tableValues):this.table_value);
  }
}

