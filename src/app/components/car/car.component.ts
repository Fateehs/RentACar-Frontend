import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BASE_URL } from 'src/app/models/constants/urls';
import { CarDetailDto } from 'src/app/models/entitymodels/car/carDetailDto';
import { CarImage } from 'src/app/models/entitymodels/car/carImage';
import { CarService } from 'src/app/services/carservice/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  carDetails: CarDetailDto[] = [];
  currentCar: CarDetailDto;
  filterText: "";
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrandId(params['brandId']);
      } else {
        this.getCarDetail();
      }
    });

    this.activatedRoute.params.subscribe((params) => {
      if (params['colorId']) {
        this.getCarsByColorId(params['colorId']);
      } else {
        this.getCarDetail();
      }
    });
  }

  getCarDetail() {
    this.carService.getCars().subscribe((response) => {
      this.carDetails = response.data;
    });
  }

  getCarsByBrandId(brandId: number) {
    this.carService.getCarsByBrandId(brandId).subscribe((response) => {
      this.carDetails = response.data;
    });
  }

  getCarsByColorId(colorId: number) {
    this.carService.getCarsByColorId(colorId).subscribe((response) => {
      this.carDetails = response.data;
    });
  }
  setCurrentCar(car: CarDetailDto) {
    this.currentCar = car;
  }
}
