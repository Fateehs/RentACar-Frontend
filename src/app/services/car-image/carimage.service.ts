import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  DELCARIMAGE_URL,
  GETALLIMGBYCARID_URL,
} from 'src/app/models/constants/urls';
import { CarImage } from 'src/app/models/entitymodels/car/carImage';
import { ListResponseModel } from 'src/app/models/responsemodels/listResponseModel';
import { ResponseModel } from 'src/app/models/responsemodels/responseModel';

@Injectable({
  providedIn: 'root',
})
export class CarImageService {
  constructor(private httpClient: HttpClient) {}

  getAllByCarId(carId: number): Observable<ListResponseModel<CarImage>> {
    let newPath = GETALLIMGBYCARID_URL + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  delete(id: number) {
    return this.httpClient.post<ResponseModel>(DELCARIMAGE_URL + id, null);
  }
}
