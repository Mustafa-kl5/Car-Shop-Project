
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-car-slot',
  templateUrl: './car-slot.component.html',
  styleUrls: ['./car-slot.component.css']
})
export class CarSlotComponent implements OnInit {
  cars =[]
  
  currentIndex:number=0
  constructor(private http:HttpClient) {
    this.getCar();
    
  }
    
  ngOnInit(): void {
  }

getCar(){
   this.http.get<any>("https://run.mocky.io/v3/d422663a-5f9e-4660-9707-43882be6fbbd").subscribe({
    next: (resp) => {
      this.cars = resp.cars;
      console.log(this.cars)

    },
    error: () => {}
   });
  
    
}
 nextItem(){
  if(this.currentIndex==this.cars.length-1){
    this.currentIndex=0
  }else{
    this.currentIndex++;
  } 
  
 
 }
 prevItem(){
  if(this.currentIndex==0){
    this.currentIndex=this.cars.length-1
  }else{
    this.currentIndex--;
  }
 }
  

}
