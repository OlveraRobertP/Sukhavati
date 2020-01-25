import { Student } from 'src/app/core/models/student.model';
import { ClassSet } from 'src/app/core/models/class-set.model';
import { TypePayment } from 'src/app/core/models/type-payment.model';

export class Payment {
    id: number;
	coments: string;
	type: TypePayment;		
	transactionDate: string;
	amount: number;
	purchasedSet: ClassSet;
	student: Student;
}