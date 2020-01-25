import { Course } from "./course.model";
import { Student } from "./student.model";


export class Attendance {
	id: number;
	student: Student;
	registrationDate: string;
}