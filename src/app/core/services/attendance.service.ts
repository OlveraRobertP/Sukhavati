import { Injectable } from '@angular/core';
import { ClassSet } from '../models/class-set.model';
import { Attendance } from '../models/attendance.model';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor() { }

  getAttendancesList(): Attendance[] {
    return [
      {
        Id: 1, RegistrationDate: new Date('1/7/2020 23:15:00'), Student: {
          Id: 1, Name: 'Ana Maria', LastName: 'Garcia', BirthDate: new Date(''),
          Address: 'Av. Independencia No. 241 ', Email: 'ana.garcia@hotmail.com', Gender: 'Mujer',
          MobileNumber: '', PhoneNumber: '55-34-85-00-17', Colonia: '', City: '', ZipCode: '', Region: '', Rfc: ''
        }
      },
      {
        Id: 1, RegistrationDate: new Date('1/6/2020 23:15:00'), Student: {
          Id: 1, Name: 'Ana Maria', LastName: 'Garcia', BirthDate: new Date(''),
          Address: 'Av. Independencia No. 241 ', Email: 'ana.garcia@hotmail.com', Gender: 'Mujer',
          MobileNumber: '', PhoneNumber: '55-34-85-00-17', Colonia: '', City: '', ZipCode: '', Region: '', Rfc: ''
        }
      },
      {
        Id: 1, RegistrationDate: new Date('1/5/2020 23:15:00'), Student: {
          Id: 1, Name: 'Ana Maria', LastName: 'Garcia', BirthDate: new Date(''),
          Address: 'Av. Independencia No. 241 ', Email: 'ana.garcia@hotmail.com', Gender: 'Mujer',
          MobileNumber: '', PhoneNumber: '55-34-85-00-17', Colonia: '', City: '', ZipCode: '', Region: '', Rfc: ''
        }
      },
      {
        Id: 1, RegistrationDate: new Date('12/25/2019 23:15:00'), Student: {
          Id: 1, Name: 'Ana Maria', LastName: 'Garcia', BirthDate: new Date(''),
          Address: 'Av. Independencia No. 241 ', Email: 'ana.garcia@hotmail.com', Gender: 'Mujer',
          MobileNumber: '', PhoneNumber: '55-34-85-00-17', Colonia: '', City: '', ZipCode: '', Region: '', Rfc: ''
        }
      },
      {
        Id: 1, RegistrationDate: new Date('11/26/2019 23:15:00'), Student: {
          Id: 4, Name: 'Hector', LastName: 'Fuentes', BirthDate: new Date('5/18/1965'),
          Address: 'Av. 5 De Mayo No 1100-A', Email: 'hfuentes@gmal.com', Gender: 'Hombre',
          MobileNumber: '', PhoneNumber: '55-39-58-19-34', Colonia: '', City: '', ZipCode: '', Region: '', Rfc: ''
        }
      },
      {
        Id: 1, RegistrationDate: new Date('11/17/2019 23:15:00'), Student: {
          Id: 4, Name: 'Hector', LastName: 'Fuentes', BirthDate: new Date('5/18/1965'),
          Address: 'Av. 5 De Mayo No 1100-A', Email: 'hfuentes@gmal.com', Gender: 'Hombre',
          MobileNumber: '', PhoneNumber: '55-39-58-19-34', Colonia: '', City: '', ZipCode: '', Region: '', Rfc: ''
        }
      },
      {
        Id: 1, RegistrationDate: new Date('1/7/2020 23:15:00'), Student: {
          Id: 4, Name: 'Hector', LastName: 'Fuentes', BirthDate: new Date('5/18/1965'),
          Address: 'Av. 5 De Mayo No 1100-A', Email: 'hfuentes@gmal.com', Gender: 'Hombre',
          MobileNumber: '', PhoneNumber: '55-39-58-19-34', Colonia: '', City: '', ZipCode: '', Region: '', Rfc: ''
        }
      },
      {
        Id: 1, RegistrationDate: new Date('1/5/2020 23:15:00'), Student: {
          Id: 4, Name: 'Hector', LastName: 'Fuentes', BirthDate: new Date('5/18/1965'),
          Address: 'Av. 5 De Mayo No 1100-A', Email: 'hfuentes@gmal.com', Gender: 'Hombre',
          MobileNumber: '', PhoneNumber: '55-39-58-19-34', Colonia: '', City: '', ZipCode: '', Region: '', Rfc: ''
        }
      },
      {
        Id: 1, RegistrationDate: new Date('1/7/2020 23:15:00'), Student: {
          Id: 4, Name: 'Hector', LastName: 'Fuentes', BirthDate: new Date('5/18/1965'),
          Address: 'Av. 5 De Mayo No 1100-A', Email: 'hfuentes@gmal.com', Gender: 'Hombre',
          MobileNumber: '', PhoneNumber: '55-39-58-19-34', Colonia: '', City: '', ZipCode: '', Region: '', Rfc: ''
        }
      }
    ];
  }
}
