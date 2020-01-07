import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { StudentService } from 'src/app/core/services/student.service';
import { Student } from 'src/app/core/models/student.model';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
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

  goToDepartmentDetails(department: number) {
    this.routeStateService.add("Department details", "/main/departments/department-detail", department, false);
  }

  addStudent() {
    this.routeStateService.add("Student details", "/main/student/student-detail", null, false);
  }

}
