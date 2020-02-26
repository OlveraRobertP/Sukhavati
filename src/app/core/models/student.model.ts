import { Sepomex } from "./sepomex.model";

export class Student {
	id: number;
	name: string;
	lastName: string;
	birthDate?: string;
	email?: string;
	phoneNumber?: string;
	mobileNumber?: string;
	address?: string;
	gender?: string;
	rfc?: string;
	zipCode?: string;
	colonia?: string;
	region?: string;
	city?: string;
	maritalStatus?: string;
	comments?: string;
	extraComments?: string;
	photo?: string;
	sepomex?: Sepomex;
}