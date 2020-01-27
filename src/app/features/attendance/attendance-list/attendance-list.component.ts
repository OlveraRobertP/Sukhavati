import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/core/models/student.model';
import { Attendance } from 'src/app/core/models/attendance.model';
import { TranslateService } from '@ngx-translate/core';


import { StudentService } from 'src/app/core/services/student.service';
import { AttendanceService } from 'src/app/core/services/attendance.service';

@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.css']
})
export class AttendanceListComponent implements OnInit {

  student: Student;

  filteredStudents: Student[];

  students: Student[];

  attendances: Attendance[];

  constructor(public translate: TranslateService,
    private attendanceService: AttendanceService,
    private studentService: StudentService) { }

  ngOnInit() {
     this.students = this.studentService.getStudentList();
     this.attendances = this.attendanceService.getAttendancesList();
  }

  filterStudents(event) {
    this.filteredStudents = [];
    for (let i = 0; i < this.students.length; i++) {
      let student = this.students[i];
      if (student.name.toLowerCase().indexOf(event.query.toLowerCase()) >= 0
        || student.lastName.toLowerCase().indexOf(event.query.toLowerCase()) >= 0) {
        this.filteredStudents.push(student);
      }
    }
  }

  

}
