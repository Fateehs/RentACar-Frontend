import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BASE_URL } from 'src/app/models/constants/urls';
import { Car } from 'src/app/models/entitymodels/car/car';
import { CarDetailDTO } from 'src/app/models/entitymodels/car/car-detail-dto';
import { CarImage } from 'src/app/models/entitymodels/car/carImage';
import { CarImageService } from 'src/app/services/car-image/carimage.service';

import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css'],
})
export class CarDetailComponent implements OnInit {
  carDetailDTO: CarDetailDTO;
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getDetailById(params['carId']);
      }
    });
  }

  getDetailById(carId: number) {
    this.carService.getDetailById(carId).subscribe((response) => {
      this.carDetailDTO = response.data;
    });
  }
}
