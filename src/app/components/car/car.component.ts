import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/entitymodels/car';
import { CarService } from 'src/app/services/carservice/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  currentCar: Car;
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['colorId']) {
        this.getCarsByColorId(params['colorId']);
      } else if (params['brandId']) {
        this.getCarsByBrandId(params['brandId']);
      } else {
        this.getCarDetails();
      }
    });
  }

  getCarDetails() {
    this.carService.getCarDetails().subscribe((response): void => {
      this.cars = response.data;
    });
  }

  getCarsByColorId(colorId: number) {
    this.carService.getCarsByColorId(colorId).subscribe((response) => {
      this.cars = response.data;
    });
  }

  getCarsByBrandId(brandId: number) {
    this.carService.getCarsByBrandId(brandId).subscribe((response) => {
      this.cars = response.data;
    });
  }

  getCarsByCarId(carId: number) {
    this.carService.getCarsByCarId(carId).subscribe((response) => {
      this.cars = response.data;
    });
  }

  setCurrentCar(car: Car) {
    this.currentCar = car;
  }
}
