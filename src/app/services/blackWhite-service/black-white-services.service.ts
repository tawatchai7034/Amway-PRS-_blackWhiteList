import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

export class BlackWhite {
  receiveNo!: String;
  sku!: String;
  serialNoNew!: String;
  serialNoOld!: String;
  type!: String;
  recordDate!: String;
  status!: String;
  createBy!: String;
}

export class SearchBlackWhite {
  receiveNo!: String;
  sku!: String;
  serialNoNew!: String;
  serialNoOld!: String;
  type!: String;
  status!: String;
}

@Injectable({
  providedIn: 'root',
})
export class BlackWhiteServicesService {
  // Node/Express API
  REST_API: string = 'http://localhost:8000/api';
  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) {}

  // insert blackWhite
  AddBlackWhite(data: BlackWhite): Observable<any> {
    let API_URL = `${this.REST_API}/apiInsertBlackWhite`;
    return this.httpClient
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
  }

    // Get all blackWhite list
  GetAllBlackWhiteList(): Observable<any>  {
    let API_URL = `${this.REST_API}/apiAllBlackWhiteList`;
    return this.httpClient
      .post(API_URL,'')
      .pipe(catchError(this.handleError));
  }

  // Get blackWhite list
  GetBlackWhiteList(data: SearchBlackWhite): Observable<any> {
    let API_URL = `${this.REST_API}/apiGetBlackWhiteList`;
    return this.httpClient
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
  }

    // Get single blackWhite 
    GetBlackWhite(data: String): Observable<any> {
      let API_URL = `${this.REST_API}/apiGetBlackWhite`;
      return this.httpClient
        .post(API_URL, data)
        .pipe(catchError(this.handleError));
    }

      // Update
  updateBlackWhite(data:any): Observable<any> {
    let API_URL = `${this.REST_API}/apiUpdateBlackWhite`;
    return this.httpClient
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
  }

    // Delete
    deleteBlackWhite(data:any): Observable<any> {
      let API_URL = `${this.REST_API}/apiDeleteBlackWhite`;
      return this.httpClient
        .post(API_URL, data)
        .pipe(catchError(this.handleError));
    }

  // Error
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
