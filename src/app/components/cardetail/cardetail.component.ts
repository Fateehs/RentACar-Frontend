import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/entitymodels/car';
import { CarImage } from 'src/app/models/entitymodels/carImage';
import { CardetailService } from 'src/app/services/cardetailservice/cardetail.service';
import { CarService } from 'src/app/services/carservice/car.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css'],
})
export class CardetailComponent implements OnInit {
  cars: Car[] = [];
  carImages: CarImage[];
  imageUrl = 'https://localhost:44315/uploads/images/';
  constructor(
    private carService: CarService,
    private carDetail: CardetailService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetails(params['carId']);
        this.getImageByCarId(params['carId']);
      }
    });
  }

  getCarDetails(carId: number) {
    this.carDetail.getCarDetails(carId).subscribe((response) => {
      this.cars = response.data;
      console.log(response.data)
    });
  }

  getImageByCarId(carId: number) {
    this.carDetail.getImageByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
      console.log(response.data)
    });
  }
}
