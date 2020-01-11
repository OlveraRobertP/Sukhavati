import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SepomexService {

  private urlApi = 'https://api-sepomex.hckdrk.mx';

  constructor(private httpClient: HttpClient) { }

  public getColoniasByCP(zipCode: string){
    const url = `${this.urlApi}/query/info_cp/${zipCode}`;
    return this.httpClient.get(url);
  }

}
