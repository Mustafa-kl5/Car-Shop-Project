import { Component, OnInit } from '@angular/core';
import { CarSlotService } from './car-slot.service';
import { Car } from './car.model';
@Component({
  selector: 'app-car-slot',
  templateUrl: './car-slot.component.html',
  styleUrls: ['./car-slot.component.css'],
})
export class CarSlotComponent implements OnInit {
  Cars!: Car[];

  constructor(private cService: CarSlotService) {}
  ngOnInit(): void {
    this.cService.getData().subscribe((res) => {
      this.Cars = res;
      console.log('From init', this.Cars);
    });
  }
}
