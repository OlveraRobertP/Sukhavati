import { Student } from 'src/app/core/models/student.model';
import { ClassSet } from 'src/app/core/models/class-set.model';
import { TypePayment } from 'src/app/core/models/type-payment.model';

export class Payment {
    Id: number;
	Coments: string;
	Type: TypePayment;		
	TransactionDate: Date;
	Amount: number;
	PurchasedSet: ClassSet;
	Student: Student;
}