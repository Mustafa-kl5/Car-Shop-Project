import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { Car } from './car.model';

@Injectable({ providedIn: 'root' })
export class CarSlotService {
  carData!: Car;

  constructor(private http: HttpClient) {}

  getData() {
    return this.http
      .get<Car[]>(
        'https://run.mocky.io/v3/793607a0-cdbb-4af4-91be-41f694b94ba9'
      )
      .pipe(
        map((response) => {
          console.log(response);
          return response;
        })
      );
  }
}
