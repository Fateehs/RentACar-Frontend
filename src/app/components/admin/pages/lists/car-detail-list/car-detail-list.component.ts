import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/entitymodels/car/car';
import { CarDetailDTO } from 'src/app/models/entitymodels/car/car-detail-dto';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-car-detail-list',
  templateUrl: './car-detail-list.component.html',
  styleUrls: ['./car-detail-list.component.css'],
})
export class CarDetailListComponent implements OnInit {
  filterText: string;
  carDetailDTOs: CarDetailDTO[];
  cars: Car[];
  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.getAll();
    this.getDetails();
  }

  getDetails() {
    this.carService.getDetails().subscribe((response) => {
      this.carDetailDTOs = response.data;
    });
  }

  getAll() {
    this.carService.getAll().subscribe((response) => {
      this.cars = response.data;
    });
  }

  getByIdFromInMemory(carId: number): Car {
    return this.cars.filter((c) => c.carId === carId)[0];
  }
}
