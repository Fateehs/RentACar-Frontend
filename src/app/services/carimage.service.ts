import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {
  DELCARIMAGE_URL,
  GETALLIMGBYCARID_URL
} from 'src/app/models/constants/urls';
import { CarImage } from 'src/app/models/entity-models/car/carImage';
import { ListResponseModel } from 'src/app/models/response-models/listResponseModel';
import { ResponseModel } from 'src/app/models/response-models/responseModel';
import { TemplatesService } from './templates.service';

@Injectable({
  providedIn: 'root',
})
export class CarImageService {
  constructor(
    private httpClient: HttpClient,
    private templatesService: TemplatesService,
    private activatedRoute: ActivatedRoute
  ) {}
  currentCarId: number;

  getAllByCarId(carId: number): Observable<ListResponseModel<CarImage>> {
    let newPath = GETALLIMGBYCARID_URL + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  delete(id: number) {
    return this.httpClient.post<ResponseModel>(DELCARIMAGE_URL + id, null);
  }
}
