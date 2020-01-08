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

  students: Student[];

  constructor(private routeStateService: RouteStateService,
    private studentService: StudentService,
    public translate: TranslateService) { }

  ngOnInit() {
    this.students = this.studentService.getStudentList();
  }

  goToStudentDetails(student:  Student) {
    this.routeStateService.add('Student detail', '/main/students/student-detail', student, false);
  }

  addStudent() {
    this.routeStateService.add('Student details', '/main/students/student-detail', null, false);
  }

}
