import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-car-slot',
  templateUrl: './car-slot.component.html',
  styleUrls: ['./car-slot.component.css']
})
export class CarSlotComponent implements OnInit {

  constructor(
    private http: HttpClient) {
      this.getData()
     }
     carData:any=this.getData()
     getData():any{
      return this.http.get('https://run.mocky.io/v3/793607a0-cdbb-4af4-91be-41f694b94ba9').subscribe(res => console.log(res))
        }
  ngOnInit(): void {
  }
  

}
