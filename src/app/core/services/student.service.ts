import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { AppSettings } from './app-settings.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { SessionService } from './session.service';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private urlApi = AppSettings.urlApi;

  constructor(private httpClient: HttpClient,
    private sessionService: SessionService) { }

  /**
   * get students list
   */
  public getStudentList() {
      const url = `${this.urlApi}/svc/student/list/`;
      return this.httpClient.get<Student[]>(url);
  }

  save(student : Student) : Observable<any>{
    const url = `${this.urlApi}/svc/student/save/`;
    return this.httpClient.put<any>(url,student);
  }

  getStudentById(studentSelected: number) {
    const url = `${this.urlApi}/svc/student/getById/${studentSelected}/`;
    return this.httpClient.get<Student>(url);
 }

}
