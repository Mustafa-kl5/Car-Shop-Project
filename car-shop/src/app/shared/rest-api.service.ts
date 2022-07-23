import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cars } from '../shared/cars';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
 apiURL="https://run.mocky.io/v3/793607a0-cdbb-4af4-91be-41f694b94ba9"
  constructor(private http: HttpClient) { }
  
    
    getCars(): Observable<Cars> {
      return this.http.get<Cars>(this.apiURL).pipe(map((res)=>{return res}))
        
    }
  };

