import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudentList(): Student[] {
    return [
      {
        Id: 1, Name: 'Ana Maria', LastName: 'Garcia', BirthDate: new Date('12/11/1981'),
        Address: 'Av. Independencia No. 241 ', Email: 'ana.garcia@hotmail.com', Gender: 'Mujer',
        MobileNumber: '', PhoneNumber: '55-34-85-00-17'
      },
      {
        Id: 2, Name: 'Camilo ', LastName: 'Mora', BirthDate: new Date('7/23/1991'),
        Address: 'Av. 20 De Noviembre No. 1060', Email: 'camilo@gmail.com', Gender: 'Hombre',
        MobileNumber: '', PhoneNumber: '55-47-57-50-99'
      },
      {
        Id: 3, Name: 'Ivonne', LastName: 'Juarez', BirthDate: new Date('2/5/1979'),
        Address: 'Calle Matamoros No. 127', Email: 'ivone@hotmail.com', Gender: 'Mujer',
        MobileNumber: '', PhoneNumber: '55-06-35-07-76'
      },
      {
        Id: 4, Name: 'Hector', LastName: 'Fuentes', BirthDate: new Date('5/18/1965'),
        Address: 'Av. 5 De Mayo No 1100-A', Email: 'hfuentes@gmal.com', Gender: 'Hombre',
        MobileNumber: '', PhoneNumber: '55-39-58-19-34'
      },
      {
        Id: 5, Name: 'Rosa Maria', LastName: 'Gamboa', BirthDate: new Date('1/31/1986'),
        Address: 'Calle Ignacio Rayon No.949', Email: 'maria.g@hotmail.com', Gender: 'Mujer',
        MobileNumber: '', PhoneNumber: '55-09-28-59-52'
      },
    ];
  }
}
