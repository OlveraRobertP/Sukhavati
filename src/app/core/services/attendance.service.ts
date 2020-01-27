import { Injectable } from '@angular/core';
import { ClassSet } from '../models/class-set.model';
import { Attendance } from '../models/attendance.model';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor() { }

  getAttendancesList(): Attendance[] {
    return  null;
  }
}
