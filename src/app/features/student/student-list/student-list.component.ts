import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { StudentService } from 'src/app/core/services/student.service';
import { Student } from 'src/app/core/models/student.model';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  columns: any[];

  students: Student[];

  constructor(private routeStateService: RouteStateService,
    private studentService: StudentService,
    public translate: TranslateService) { }

  ngOnInit() {

    this.columns = [
      { field: 'Id', header: 'Student-Id' },
      { field: 'Name', header: 'Student-Name' },
      { field: 'LastName', header: 'Student-Name' },
      { field: 'BirthDate', header: 'Student-BirthDate' },
      { field: 'Gender', header: 'Student-Gender' }
    ];

    this.students = this.studentService.getStudentList();
  }

  goToStudentDetails(student) {
    this.routeStateService.add("Student details", "/main/students/student-detail", student, false);
  }

  addStudent() {
    this.routeStateService.add("Student details", "/main/students/student-detail", null, false);
  }

}
