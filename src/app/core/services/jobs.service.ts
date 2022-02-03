import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  api = 'https://ibillboard.com/api/positions';
  constructor(private _http: HttpClient) { }
  
  getJobs(){
    return this._http
    .get(`${this.api}`)
    .pipe(
      catchError((err) => {
        return throwError(`Error ${err}`);
      }),
      map((resp: any) => {
        console.log(resp, 'resp')
        return resp;
      })
    );
  }
}
