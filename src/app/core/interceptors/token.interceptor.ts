import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { SessionService } from '../services/session.service';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  constructor(public sessionService: SessionService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(request.url.indexOf('sukhavaty-services')>0){
      request = request.clone({
        setHeaders: {
          Authorization: `${this.sessionService.getItem("currentUser") == undefined ? '' : this.sessionService.getItem("currentUser").id}`
          //Authorization: `Bearer ${this.sessionService.getItem("currentUser") == undefined ? '' : this.sessionService.getItem("currentUser").id}`
          //Authorization: `Bearer 1`
        }
      });
    }
    
    return next.handle(request).pipe(
        catchError((err: HttpErrorResponse) => {
  
          return throwError( err );
  
        })
      );;
  }
}