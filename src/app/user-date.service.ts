import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private userDataSource = new BehaviorSubject<UserInfo[]>([]);
  userData = this.userDataSource.asObservable();
  arr: UserInfo[];

  private editFormValues = new BehaviorSubject<any>([]);
  formValues = this.editFormValues.asObservable();

  constructor(private http: HttpClient) {
   this.http.get('http://localhost:8080/').toPromise().then(value=> {
     console.log(value);
     this.editFormValues.next(value);
   });
  }

  getAllUserInfo() {
    return this.userDataSource;
  }

  getUserInfo(id) {
    return this.userDataSource[id];
  }

  addUserInfo(info: UserInfo) {
    this.arr.push(info);
    this.userDataSource.next(this.arr);
    console.log('Hello!');
    localStorage.setItem('userInfo', JSON.stringify(this.arr));
  }

  stageEdit(formValue) {
    this.editFormValues.next(formValue);
  }

  editUserInfo(info: UserInfo, id: number) {
    this.arr.splice(id, 1, info);
    this.userDataSource.next(this.arr);
    localStorage.setItem('userInfo', JSON.stringify(this.arr));
  }
  delete(value)
  {
    return(this.http.delete('http://localhost:8080/user-info/' + value.id));
  }
}

export class UserInfo {
  fname: string;
  username: string;
  password: string;
  phone: string;
  emailSwitch: boolean;
  email: string;
  address: string;
  contacts: number;
  valid_period: string;
  appID: string;
  capacity: number;
  postscript: string;
  authorization: boolean;
}
