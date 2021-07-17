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
  this.user_service.formValues.subscribe(value=> {
    this.table_value=value;
    console.log(value);
  })
  }

delete(value) {
  this.user_service.delete(value).subscribe(val=> {
    console.log(val);
    this.table_value = this.user_service.getAllUserInfo;
    //this.table_value = val;
  }
  );
}

  ngOnInit() {
    this.user_service.userData.subscribe(tableValues => tableValues[0]?this.table_value.splice(0, this.table_value.length, ...tableValues):this.table_value);
  }
}

