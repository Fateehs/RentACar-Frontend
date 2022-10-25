import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/models/constants/urls';
import { CarDetailDto } from 'src/app/models/entitymodels/car/carDetailDto';
import { ListResponseModel } from 'src/app/models/responsemodels/listResponseModel';
import { SingleResponseModel } from 'src/app/models/responsemodels/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  constructor(private httpClient:HttpClient) { }

  getCarDetailsById(carId:number): Observable<SingleResponseModel<CarDetailDto>>{
    let newPath = API_URL+'cars/getcardetailsbycarid?carId='+ carId;
    return this.httpClient.get<SingleResponseModel<CarDetailDto>>(newPath)
  }
}
