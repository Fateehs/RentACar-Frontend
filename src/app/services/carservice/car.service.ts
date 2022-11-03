import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import {
  CARADD_URL,
  CARDEL_URL,
  CARUPD_URL,
  GETCARBYID_URL,
  GETCARDETAILBYID_URL,
  GETCARDETAILS_URL,
  GETCARS_URL,
  GETDETAILSBYBRANDID_URL,
  GETDETAILSBYCOLORID_URL,
} from 'src/app/models/constants/urls';
import { Car } from 'src/app/models/entitymodels/car/car';
import { CarDetailDTO } from 'src/app/models/entitymodels/car/car-detail-dto';
import { ListResponseModel } from 'src/app/models/responsemodels/listResponseModel';
import { ResponseModel } from 'src/app/models/responsemodels/responseModel';
import { SingleResponseModel } from 'src/app/models/responsemodels/singleResponseModel';
import { TemplatesService } from '../templatesservice/templates.service';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(
    private httpClient: HttpClient,
    private toastrService: ToastrService,
    private templatesService: TemplatesService
  ) {}

  add(car: Car) {
    this.httpClient.post<ResponseModel>(CARADD_URL, car).subscribe(
      (respone) => {
        this.toastrService.success(respone.message);
        window.location.reload();
      },
      (errorResponse) => this.templatesService.errorResponse(errorResponse)
    );
  }

  update(car: Car) {
    this.httpClient.post<ResponseModel>(CARUPD_URL, car).subscribe(
      (response) => {
        this.toastrService.success(response.message);
        window.location.reload();
      },
      (errorResponse) => this.templatesService.errorResponse(errorResponse)
    );
  }

  delete(car: Car) {
    this.httpClient.post<ResponseModel>(CARDEL_URL, car).subscribe(
      (response) => {
        this.toastrService.success(response.message);
        window.location.reload();
      },
      (errorResponse) => this.templatesService.errorResponse(errorResponse)
    );
  }

  getAll(): Observable<ListResponseModel<Car>> {
    return this.httpClient.get<ListResponseModel<Car>>(GETCARS_URL);
  }

  getById(carId: number): Observable<SingleResponseModel<Car>> {
    return this.httpClient.get<SingleResponseModel<Car>>(
      GETCARBYID_URL + carId
    );
  }

  getDetailById(carId: number): Observable<SingleResponseModel<CarDetailDTO>> {
    return this.httpClient.get<SingleResponseModel<CarDetailDTO>>(
      GETCARDETAILBYID_URL + carId
    );
  }

  getDetails(): Observable<ListResponseModel<CarDetailDTO>> {
    return this.httpClient.get<ListResponseModel<CarDetailDTO>>(
      GETCARDETAILS_URL
    );
  }

  getDetailsByBrandId(
    brandId: number
  ): Observable<ListResponseModel<CarDetailDTO>> {
    return this.httpClient.get<ListResponseModel<CarDetailDTO>>(
      GETDETAILSBYBRANDID_URL + brandId
    );
  }

  getDetailsByColorId(
    colorId: number
  ): Observable<ListResponseModel<CarDetailDTO>> {
    return this.httpClient.get<ListResponseModel<CarDetailDTO>>(
      GETDETAILSBYCOLORID_URL + colorId
    );
  }
}
