import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from 'src/app/models/responsemodels/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = "https://localhost:44315/api/cars/getcardetails"

  getCars() : Observable<CarResponseModel> {
    return this.httpClient.get<CarResponseModel>(this.apiUrl)
  }
}
