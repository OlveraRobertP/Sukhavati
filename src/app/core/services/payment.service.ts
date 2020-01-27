import { Injectable } from '@angular/core';
import { Payment } from '../models/payment.model';
import { TypePayment } from '../models/type-payment.model';
import { ClassSet } from '../models/class-set.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  getPurchasedSets(): ClassSet[] {
    return null;
  }

  getTypePayments(): TypePayment[] {
    return null;
  }

  getPaymetsList(): Payment[] {
    return null;
  }
}
