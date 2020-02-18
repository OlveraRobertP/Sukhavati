import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { AppSettings } from './app-settings.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  getStudentById(studentSelected: number) {
     const url = `${this.urlApi}/svc/student/getById/${studentSelected}/`;
     return this.httpClient.get<Student>(url);
  }

  private urlApi = AppSettings.urlApi;

  constructor(private httpClient: HttpClient) { }

  /**
   * get students list
   */
  public getStudentList() {
      const url = `${this.urlApi}/svc/student/list/`;
      return this.httpClient.get<Student[]>(url);
  }

  save(student : Student) : Observable<Student>{
    const url = `${this.urlApi}/svc/student/save/`;
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*'
         });    
         let options = {
      headers: httpHeaders
         };      

    return this.httpClient.put<Student>(url,student);
  }

}
