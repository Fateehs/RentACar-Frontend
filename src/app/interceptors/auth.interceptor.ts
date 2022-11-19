import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = JSON.parse(localStorage.getItem('token'));
    let newRequest: HttpRequest<any>;
    newRequest = request.clone({
      headers: request.headers.set('Authorization', 'Bearer ' + token),
    });
    return next.handle(newRequest);
  }
}
