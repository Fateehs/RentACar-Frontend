import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/models/constants/urls';
import { CarImage } from 'src/app/models/entitymodels/car/carImage';
import { ListResponseModel } from 'src/app/models/responsemodels/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarimageService {
  constructor(private httpClient: HttpClient) {}

  getImageByCarId(carId: number): Observable<ListResponseModel<CarImage>> {
    let newPath = API_URL + 'carImages/getbycarid?carId=' + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}
