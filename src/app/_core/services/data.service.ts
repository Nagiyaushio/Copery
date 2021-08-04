import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

let urlApi = '';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {
    urlApi = environment.urlApi;
  }

  get(uri: any): Observable<any> {
    return this.http.get(urlApi + '/' + uri).pipe(
      tap(() => {}),
      catchError((error: any) => {
        return this.handleError(error);
      })
    );
  }

  post(uri: any, data: any) {
    return this.http.post(urlApi + '/' + uri, data).pipe(
      tap(() => {}),
      catchError((error: any) => {
        return this.handleError(error);
      })
    );
  }

  put(uri: any, data: any) {
    return this.http.put(urlApi + '/' + uri, data).pipe(
      tap(() => {}),
      catchError((error: any) => {
        return this.handleError(error);
      })
    );
  }

  delete(uri: any, data: any) {
    return this.http.delete(urlApi + '/' + uri + data).pipe(
      tap(() => {}),
      catchError((error: any) => {
        return this.handleError(error);
      })
    );
  }

  handleError(error: any) {
    switch (error.status) {
      case 300:
        break;

      case 401:
        alert(error.error);
        break;

      case 403:
        alert(error.error);
        break;

      case 500:
        alert(error.error);
        break;

      default:
        break;
    }

    return throwError(error);
  }
}
