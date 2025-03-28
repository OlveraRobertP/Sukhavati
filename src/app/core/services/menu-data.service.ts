import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CustomMenuItem } from '../models/menu-item.model';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from './app-settings.service';

@Injectable({
    providedIn: 'root',
})
/**
 * menu data service
 */
export class MenuDataService {

    public toggleMenuBar: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    private urlApi = AppSettings.urlApi;

    constructor(private httpClient: HttpClient) { }

    public getMenuList(user: string) {
        const url = `${this.urlApi}/svc/secure/getMenusByUser/${user}`;
        return this.httpClient.get<CustomMenuItem[]>(url);
    }

}
