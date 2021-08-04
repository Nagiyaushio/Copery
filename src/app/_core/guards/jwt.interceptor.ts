import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    let authToken: any = '';

    if (localStorage.getItem('UserAdmin')) {
      const userInfo: any = localStorage.getItem('UserAdmin');
      authToken = JSON.parse(userInfo).accessToken;
    }

    if (localStorage.getItem('Users')) {
      const userInfo: any = localStorage.getItem('Users');
      authToken = JSON.parse(userInfo).accessToken;
    }
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authToken}`),
    });

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}
