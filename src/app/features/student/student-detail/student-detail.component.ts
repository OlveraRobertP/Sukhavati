import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Student } from 'src/app/core/models/student.model';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import {MessageService} from 'primeng/api';
import {CalendarService} from 'src/app/core/services/calendar.service';
import {DropdownModule} from 'primeng/dropdown';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  student: Student;

  es: any;

  genders: any;

  constructor(public translate: TranslateService,
    private routeStateService: RouteStateService,
     private messageService: MessageService,
     private calendarService: CalendarService) { }

  ngOnInit() {
    let routeState = this.routeStateService.getCurrent();
    this.student = routeState.data || new Student();
    this.es = this.calendarService.getCalendarLabels();
    this.genders = [{name: this.translate.instant('Male')},{name: this.translate.instant('Famale')}]
  }

  back() {
    this.routeStateService.loadPrevious();
  }

  saveStudent() {
    /// save student
    this.messageService.add({ severity: 'success', summary: this.translate.instant('Success'),
     detail: this.translate.instant('Success-Save')});

  }
}
