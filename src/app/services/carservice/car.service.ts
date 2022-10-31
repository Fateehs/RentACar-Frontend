import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CARADD_URL } from 'src/app/models/constants/urls';
import { Car } from 'src/app/models/entitymodels/car/car';
import { CarDetailDto } from 'src/app/models/entitymodels/car/carDetailDto';
import { ListResponseModel } from 'src/app/models/responsemodels/listResponseModel';
import { ResponseModel } from 'src/app/models/responsemodels/responseModel';
import { SingleResponseModel } from 'src/app/models/responsemodels/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private httpClient: HttpClient) {}

  apiUrl = 'https://localhost:44315/api/';

  getCars(): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + 'cars/getcardetails';
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
  getCarsByColorId(
    colorId: number
  ): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + 'cars/getcarsbycolorid?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
  getCarsByBrandId(
    brandId: number
  ): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + 'cars/getcarsbybrandid?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
  getCarsByCarId(carId: number): Observable<SingleResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbycarid?carId=' + carId;
    return this.httpClient.get<SingleResponseModel<CarDetailDto>>(newPath);
  }

  add(car: Car): Observable<ResponseModel> {
    let carAddPath = CARADD_URL;
    return this.httpClient.post<ResponseModel>(carAddPath, car);
  }
}
