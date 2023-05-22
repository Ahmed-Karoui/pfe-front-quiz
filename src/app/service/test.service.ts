import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class TestService {
  private baseURL = `http://localhost:3000/candidates`
  constructor(private http: HttpClient) { }

  getQuestionJson() {
    return this.http.get<any>('assets/questions.json');
  }

  getallTests(): Observable<any> {
    return this.http.get(`${this.baseURL}/get-appraisals`)
  }

  addTest(data: any): Observable<any> {
    return this.http.post(`${this.baseURL}/add-test`, data)
  }


  updateirtscore(data: any, id: string): Observable<any> {
    return this.http.patch(`${this.baseURL}/update-user-irt/${id}`, data)
  }
}
