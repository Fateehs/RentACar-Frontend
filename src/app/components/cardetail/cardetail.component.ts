import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BASE_URL } from 'src/app/constants/urls';
import { Car } from 'src/app/models/entitymodels/car/car';
import { CarDetailDto } from 'src/app/models/entitymodels/car/carDetailDto';
import { CarImage } from 'src/app/models/entitymodels/car/carImage';
import { CarDetailService } from 'src/app/services/cardetailservice/cardetail.service';
import { CarService } from 'src/app/services/carservice/car.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {
  filterText: string;
  carDetail: CarDetailDto;
  carImages: CarImage[];
  cars: Car[];
  imageUrl = 'https://localhost:44315/uploads/images/';
  constructor(
    private carService: CarService,
    private carDetailService: CarDetailService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetailsById(params['carId']);
      }
    });
  }

  getCarDetailsById(carId: number) {
    this.carDetailService.getCarDetailsById(carId).subscribe((response) => {
      this.carDetail = response.data;
    });
  }

  getImagePath(carImage:CarImage){
    console.log(carImage)
    return BASE_URL + carImage.imagePath
  }
}