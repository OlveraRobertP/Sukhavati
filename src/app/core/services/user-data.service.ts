import { Injectable } from '@angular/core';
import { User } from 'src/app/core/models/user.model';

@Injectable({
    providedIn: 'root',
})
/**
 * user service class
 */
export class UserDataService {

    users: User[] = [];

    constructor() {
        let user = {
            userId: 1, userName: "admin", password: "pass", emailId: "robolverap@gmail.com", birthDate: new Date('06/23/1991')
        };
        this.users.push(user);
    }

    /**
     * get user by user name and password
     * @param userName 
     * @param password 
     */
    getUserByUserNameAndPassword(userName: string, password: string): User {
        let user: User = null;
        this.users.forEach(element => {
            if (element.userName === userName && element.password === password) {
                user = element;
            }
        });
        return user;
    }

    /**
     * add new user
     * @param userName 
     * @param password 
     * @param emailId 
     * @param birthDate 
     */
    addUser(userName: string, password: string, emailId: string, birthDate: Date): boolean {
        let userId = this.users.length + 1;
        let user = new User();
        user.userId = userId;
        user.userName = userName;
        user.password = password;
        user.emailId = emailId;
        user.birthDate = birthDate;
        this.users.push(user);
        return true;
    }
}