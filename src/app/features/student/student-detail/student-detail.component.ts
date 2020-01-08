import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Student } from 'src/app/core/models/student.model';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { MessageService } from 'primeng/api';
import { CalendarService } from 'src/app/core/services/calendar.service';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { SelectItem } from 'primeng/api';


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  student: Student;

  es: any;

  genders: SelectItem[];

  mainform: FormGroup;

  constructor(public translate: TranslateService,
    private routeStateService: RouteStateService,
    private messageService: MessageService,
    private fb: FormBuilder,
    private calendarService: CalendarService) { }

  ngOnInit() {
    let routeState = this.routeStateService.getCurrent();
    this.student = routeState.data || new Student();
    this.es = this.calendarService.getCalendarLabels();

    this.genders = [];
    this.genders.push({ label: this.translate.instant('Select'), value: '' });
    this.genders.push({ label: this.translate.instant('Male'), value: 'Male' });
    this.genders.push({ label: this.translate.instant('Female'), value: 'Female' });

    this.mainform = this.fb.group({
      'name': new FormControl('', Validators.required),
      'lastname': new FormControl('', Validators.required),
      'birthdate': new FormControl(''),
      'email': new FormControl('',Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')),
      'phonenumber': new FormControl('',),
      'mobilenumber': new FormControl(''),
      'address': new FormControl(''),
      'gender': new FormControl('', Validators.required)
    });
  }

  back() {
    this.routeStateService.loadPrevious();
  }

  onSubmit() {
    /// save student    
    this.messageService.add({
      severity: 'success', summary: this.translate.instant('Success'),
      detail: this.translate.instant('Success-Save')
    });

  }
}
