import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/core/models/payment.model';
import { SelectItem, MessageService } from 'primeng/api';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { CalendarService } from 'src/app/core/services/calendar.service';
import { Student } from 'src/app/core/models/student.model';
import { StudentService } from 'src/app/core/services/student.service';
import { TypePayment } from 'src/app/core/models/type-payment.model';
import { PaymentService } from 'src/app/core/services/payment.service';
import { ClassSet } from 'src/app/core/models/class-set.model';

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

  student: Student;

  filteredStudents: Student[];

  students: Student[];

  type: TypePayment;

  filteredTypes: TypePayment[];

  types: TypePayment[];

  purchasedSet: ClassSet;

  filteredPurchasedSets: ClassSet[];

  purchasedSets: ClassSet[];

  noSave: boolean;

  constructor(public translate: TranslateService,
    private routeStateService: RouteStateService,
    private messageService: MessageService,
    private fb: FormBuilder,
    private studentService: StudentService,
    private paymentService: PaymentService,
    private calendarService: CalendarService) { }

  ngOnInit() {
    let routeState = this.routeStateService.getCurrent();
    this.payment = routeState.data || new Payment();
    
    if (this.payment.id == null) {
      this.payment.transactionDate = new Date().toLocaleDateString();
      this.noSave = false;
    }else{
      this.payment.transactionDate = new Date(this.payment.transactionDate ).toLocaleDateString();
      this.noSave = true;
    }

    console.log(this.payment.transactionDate)

    this.es = this.calendarService.getCalendarLabels();

    this.genders = [];
    this.genders.push({ label: this.translate.instant('Select'), value: '' });
    this.genders.push({ label: this.translate.instant('Male'), value: 'Male' });
    this.genders.push({ label: this.translate.instant('Female'), value: 'Female' });

    this.mainform = this.fb.group({
      'Student': new FormControl('', Validators.required),
      'Type': new FormControl('', Validators.required),
      'TransDate': new FormControl(''),
      'Amount': new FormControl('', Validators.compose([Validators.required, Validators.pattern('\\d+([.]\\d+)?')])),
      'PurchasedSet': new FormControl('', Validators.required),
      'Coments': new FormControl(''),
    });

    this.students = this.studentService.getStudentList();

    this.types = this.paymentService.getTypePayments();

    this.purchasedSets = this.paymentService.getPurchasedSets();

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

  filterTypes(event) {
    this.filteredTypes = [];
    for (let i = 0; i < this.types.length; i++) {
      let type = this.types[i];
      if (type.description.toLowerCase().indexOf(event.query.toLowerCase()) >= 0) {
        this.filteredTypes.push(type);
      }
    }
  }

  filterPurchasedSets(event) {
    this.filteredPurchasedSets = [];
    for (let i = 0; i < this.purchasedSets.length; i++) {
      let purchasedSet = this.purchasedSets[i];
      if (purchasedSet.description.toLowerCase().indexOf(event.query.toLowerCase()) >= 0) {
        this.filteredPurchasedSets.push(purchasedSet);
      }
    }
  }

}
