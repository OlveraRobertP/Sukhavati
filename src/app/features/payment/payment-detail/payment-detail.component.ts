import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/core/models/payment.model';
import { SelectItem, MessageService } from 'primeng/api';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { CalendarService } from 'src/app/core/services/calendar.service';
import { Student } from 'src/app/core/models/student.model';
import { StudentService } from 'src/app/core/services/student.service';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit {

  payment: Payment;

  es: any;

  genders: SelectItem[];

  mainform: FormGroup;

  filteredStudentSingle: any[];
  students: any[];

  constructor(public translate: TranslateService,
    private routeStateService: RouteStateService,
    private messageService: MessageService,
    private fb: FormBuilder,
    private studentService: StudentService,
    private calendarService: CalendarService) { }

  ngOnInit() {
    let routeState = this.routeStateService.getCurrent();
    this.payment = routeState.data || new Payment();
    this.es = this.calendarService.getCalendarLabels();

    this.genders = [];
    this.genders.push({ label: this.translate.instant('Select'), value: '' });
    this.genders.push({ label: this.translate.instant('Male'), value: 'Male' });
    this.genders.push({ label: this.translate.instant('Female'), value: 'Female' });

    this.mainform = this.fb.group({
      'Student': new FormControl('', Validators.required),
      'Type': new FormControl('', Validators.required),
      'TransactionDate': new FormControl(''),
      'Amount': new FormControl('', Validators.compose([Validators.required, Validators.pattern('[0-9]')])),
      'PurchasedSet': new FormControl('', Validators.required),
      'Coments': new FormControl(''),
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

  filterStudentSingle(event) {
    let query = event.query;
    this.students = this.studentService.getStudentList();
    this.filteredStudentSingle = this.filterStudent(query, this.students);

  }

   filterStudent(query, students: any[]):any[] {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let filtered : any[] = [];
        for(let i = 0; i < students.length; i++) {
            let student = students[i];
            if(student.Name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(student);
            }
        }
        return filtered;
    }

}
