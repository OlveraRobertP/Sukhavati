import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from './app-settings.service';
import { Sepomex } from '../models/sepomex.model';

@Injectable({
  providedIn: 'root'
})
export class SepomexService {

  private urlApi = AppSettings.urlApi;

  constructor(private httpClient: HttpClient) { }

  public getColoniasByCP(zipCode: string){
    const url = `${this.urlApi}/svc/sepomex/findByZipCode/${zipCode}`;
    return this.httpClient.get<Sepomex[]>(url);
  }

}
