import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class CandidateService {

  constructor(private http:HttpClient) {
   }

  getAllInfo() :Observable<any> {
    return this.http.get('//localhost:8095/getDetails');
  }

}
