import { Injectable } from '@angular/core';
import { Payment } from '../models/payment.model';
import { TypePayment } from '../models/type-payment.model';
import { ClassSet } from '../models/class-set.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  getPurchasedSets(): ClassSet[] {
    return [
      { Id: 1, Description: 'Paquete de 1 Clases' },
      { Id: 2, Description: 'Paquete de 4 Clases' },
      { Id: 3, Description: 'Paquete de 6 Clases' },
      { Id: 4, Description: 'Paquete Ilimitado' }
    ]
  }

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
        Id: 1, Coments: '', Type: { Id: 1, Description: 'Efectivo' }, TransactionDate: new Date('11/27/2019'),
        Amount: 200, PurchasedSet: { Id: 2, Description: 'Paquete de 4 Clases' }, Student: {
          Id: 1, Name: 'Ana Maria', LastName: 'Garcia', BirthDate: new Date('12/11/1981'),
          Address: 'Av. Independencia No. 241 ', Email: 'ana.garcia@hotmail.com', Gender: 'Mujer',
          MobileNumber: '', PhoneNumber: '55-34-85-00-17', Colonia: '', City: '', ZipCode: '', Region: '', Rfc: ''
        }
      },
      {
        Id: 2, Coments: '', Type: { Id: 1, Description: 'Efectivo' }, TransactionDate: new Date('11/27/2019'),
        Amount: 100.67, PurchasedSet: { Id: 1, Description: 'Paquete de 1 Clases' }, Student: {
          Id: 3, Name: 'Ivonne', LastName: 'Juarez', BirthDate: new Date('2/5/1979'),
          Address: 'Calle Matamoros No. 127', Email: 'ivone@hotmail.com', Gender: 'Mujer',
          MobileNumber: '', PhoneNumber: '55-06-35-07-76', Colonia: '', City: '', ZipCode: '', Region: '', Rfc: ''
        }
      },
      {
        Id: 3, Coments: 'Baucher 897654', Type: { Id: 2, Description: 'Tarjeta de Credito' }, TransactionDate: new Date('11/27/2019'),
        Amount: 100.67, PurchasedSet: { Id: 3, Description: 'Paquete de 6 Clases' }, Student: {
          Id: 4, Name: 'Hector', LastName: 'Fuentes', BirthDate: new Date('5/18/1965'),
          Address: 'Av. 5 De Mayo No 1100-A', Email: 'hfuentes@gmal.com', Gender: 'Hombre',
          MobileNumber: '', PhoneNumber: '55-39-58-19-34', Colonia: '', City: '', ZipCode: '', Region: '', Rfc: ''
        }
      }
    ]
  }
}
