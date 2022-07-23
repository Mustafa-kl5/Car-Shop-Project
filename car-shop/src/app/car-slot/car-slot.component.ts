import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Post } from '../post.module';

@Component({
  selector: 'app-car-slot',
  templateUrl: './car-slot.component.html',
  styleUrls: ['./car-slot.component.css'],
})
export class CarSlotComponent implements OnInit {
  allProducts: Post[] = [];
  index = 0;
  constructor(private http: HttpClient) {
    this.getData();
  }
  carData: any = this.getData();
  getData(): any {
    return this.http
      .get<{ Post }>(
        'https://run.mocky.io/v3/06caae7f-c6c8-4468-b09e-ed5673839d34'
      )
      .pipe(
        map((res) => {
          const products: Post[] = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              products.push({ ...res[key] });
            }
          }
          return products;
        })
      )
      .subscribe((products) => {
        console.log(products);
        this.allProducts = products;
        console.log(this.allProducts);
      });
  }

  onIncrease() {
    if (this.index == this.allProducts.length - 1) {
      this.index = 0;
    } else this.index += 1;
    console.log(this.index);
  }

  onDecrease() {
    if (this.index <= 0) {
      this.index = this.allProducts.length - 1;
    } else this.index -= 1;
    console.log(this.index);
  }
  ngOnInit(): void {}
}
