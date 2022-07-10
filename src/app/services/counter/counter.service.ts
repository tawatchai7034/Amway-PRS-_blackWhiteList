import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CounterInfo } from 'src/app/models/counter';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor(private http: HttpClient) { }

  users() {
    const data: CounterInfo[] = [
      {
          seq: 1,
          rowID:"0001",
          application: "xxxxx",
          appName: "xxxx",
          appCID: "xxx",
          coApp: "xxx",
          coAppName: "xxxx",
          coAppCID: "xxxx",
          docCode: "xxxx",
          dateFrom:"09-05-2022",
         
      }
  ];
  }
}
