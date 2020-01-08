import { Injectable } from '@angular/core';
import { Payment } from '../models/payment.model';
import { TypePayment } from '../models/type-payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  getTypePayments(): TypePayment[] {
    return [
      { Id: 1, Description: 'Efectivo' },
      { Id: 2, Description: 'Tarjeta de Credito' },
      { Id: 3, Description: 'Transferencia' }
    ]
  }

  getPaymetsList(): Payment[] {
    return [
      {
        Id: 1, Coments: '', Type: { Id: 1, Description: 'Efectivo' }, TransactionDate: new Date(),
        Amount: 100.67, PurchasedSet: { Id: 1, Description: 'Paquete de 4 Clases' }, Student: {
          Id: 1, Name: 'Ana Maria', LastName: 'Garcia', BirthDate: new Date('12/11/1981'),
          Address: 'Av. Independencia No. 241 ', Email: 'ana.garcia@hotmail.com', Gender: 'Mujer',
          MobileNumber: '', PhoneNumber: '55-34-85-00-17'
        }
      },
      {
        Id: 2, Coments: '', Type: { Id: 1, Description: 'Efectivo' }, TransactionDate: new Date(),
        Amount: 100.67, PurchasedSet: { Id: 1, Description: 'Paquete de 1 Clases' }, Student: {
          Id: 3, Name: 'Ivonne', LastName: 'Juarez', BirthDate: new Date('2/5/1979'),
          Address: 'Calle Matamoros No. 127', Email: 'ivone@hotmail.com', Gender: 'Mujer',
          MobileNumber: '', PhoneNumber: '55-06-35-07-76'
        }
      },
      {
        Id: 3, Coments: 'Baucher 897654', Type: { Id: 2, Description: 'Tarjeta de Credito' }, TransactionDate: new Date(),
        Amount: 100.67, PurchasedSet: { Id: 1, Description: 'Paquete de 6 Clases' }, Student: {
          Id: 4, Name: 'Hector', LastName: 'Fuentes', BirthDate: new Date('5/18/1965'),
          Address: 'Av. 5 De Mayo No 1100-A', Email: 'hfuentes@gmal.com', Gender: 'Hombre',
          MobileNumber: '', PhoneNumber: '55-39-58-19-34'
        }
      }
    ]
  }
}
