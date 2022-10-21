import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/entitymodels/car';
import { CarImage } from 'src/app/models/entitymodels/carImage';
import { ListResponseModel } from 'src/app/models/responsemodels/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CardetailService {

  apiUrl='https://localhost:44315/api/';

  constructor(private httpClient:HttpClient) { }

  getCarDetails(carId:number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl+'cars/getbyid?carId='+carId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getImageByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl+'carimages/getbycarid?carId='+carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }
}
