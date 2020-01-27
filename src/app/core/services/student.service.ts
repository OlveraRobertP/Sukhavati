import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudentList(): Student[] {
    return null;
  }
}
