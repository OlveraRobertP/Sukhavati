import { Injectable } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from './app-settings.service';

@Injectable({
    providedIn: 'root',
})
/**
 * user service class
 */
export class UserDataService {
    
    
    
    private urlApi = AppSettings.urlApi;

    constructor(private httpClient: HttpClient) { }


    /**
     * get user by user name and password
     * @param userName 
     * @param password 
     */
    getUserByUserNameAndPassword(userName: string, password: string) {
        const url = `${this.urlApi}/svc/secure/getUser/${userName}/${password}`;
        return this.httpClient.get<User>(url);
    }


}