import { Component, OnInit } from '@angular/core';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { TranslateService } from '@ngx-translate/core';
import { Payment } from 'src/app/core/models/payment.model';
import { PaymentService } from 'src/app/core/services/payment.service';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {

  payments: Payment[];

  constructor(private routeStateService: RouteStateService,
    private paymentService: PaymentService,
    public translate: TranslateService) { }

  ngOnInit() {
    this.payments = this.paymentService.getPaymetsList();
  }

  addPayment() {
    this.routeStateService.add('Payment details', '/main/payment/payment-detail', null, false);
  }

  goToStudentDetails(student) {
    this.routeStateService.add('Payment detail', '/main/students/student-detail', student, false);
  }

}
