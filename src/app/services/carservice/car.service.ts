import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/entitymodels/car';
import { ListResponseModel } from 'src/app/models/responsemodels/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private httpClient: HttpClient) {}

  apiUrl = 'https://localhost:44315/api/';

  getCarDetails(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetails';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByColorId(colorId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcarsbycolorid?colorId='+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByBrandId(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcarsbybrandid?brandId='+brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByCarId(carId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getbyid';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}
