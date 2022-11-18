import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDTO } from 'src/app/models/entity-models/dto/car-detail-dto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.css'],
})
export class CarDetailsComponent implements OnInit {
  carDetailDTOs: CarDetailDTO[] = [];
  filterText: string;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrandId(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColorId(params['colorId']);
      } else {
        this.getDetails();
      }
    });
  }

  getDetails() {
    this.carService.getDetails().subscribe((response) => {
      this.carDetailDTOs = response.data;
    });
  }

  getCarsByBrandId(brandId: number) {
    this.carService.getDetailsByBrandId(brandId).subscribe((response) => {
      this.carDetailDTOs = response.data;
    });
  }

  getCarsByColorId(colorId: number) {
    this.carService.getDetailsByColorId(colorId).subscribe((response) => {
      this.carDetailDTOs = response.data;
    });
  }
}
