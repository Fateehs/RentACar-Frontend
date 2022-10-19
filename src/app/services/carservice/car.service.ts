import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/entitymodels/car';
import { ListResponseModel } from 'src/app/models/responsemodels/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = "https://localhost:44315/api/cars/getcardetails"

  getCars() : Observable<ListResponseModel<Car>> {
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl)
  }
}
