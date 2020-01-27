export class Notification {
    constructor(message: string, createdOn: string, createdBy: number) {
        this.message = message;
        this.createdBy = createdBy;
        this.createdOn = createdOn;
    }
    message: string;
    createdOn: string;
    createdBy: number;
}