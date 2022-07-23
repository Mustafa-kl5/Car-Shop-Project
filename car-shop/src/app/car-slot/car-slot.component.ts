import { Component, OnInit } from '@angular/core';
import { Cars } from '../shared/cars';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-car-slot',
  templateUrl: './car-slot.component.html',
  styleUrls: ['./car-slot.component.css']
})
export class CarSlotComponent implements OnInit {
  cars : any
  constructor(private carService:RestApiService) {
    
  }
    

    
      
  ngOnInit(): void {
 
    this.getData()
  }
  getData(){
    return this.carService.getCars().subscribe((data:{})=>{console.log()})
  }
  

}
