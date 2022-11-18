import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import {
  BRANDADD_URL,
  BRANDDELETE_URL,
  BRANDUPDATE_URL,
  GETBRANDS_URL
} from 'src/app/models/constants/urls';
import { Brand } from 'src/app/models/entity-models/entities/brand';
import { ListResponseModel } from 'src/app/models/response-models/listResponseModel';
import { ResponseModel } from 'src/app/models/response-models/responseModel';
import { TemplatesService } from './templates.service';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  constructor(
    private httpClient: HttpClient,
    private toastrService: ToastrService,
    private templatesService: TemplatesService
  ) {}

  add(brand: Brand) {
    this.httpClient.post<ResponseModel>(BRANDADD_URL, brand).subscribe(
      (response) => {
        this.toastrService.success(response.message);
        window.location.reload();
      },
      (errorResponse) => this.templatesService.errorResponse(errorResponse)
    );
  }

  update(brand: Brand) {
    this.httpClient.post<ResponseModel>(BRANDUPDATE_URL, brand).subscribe(
      (response) => {
        this.toastrService.success(response.message);
        window.location.reload();
      },
      (errorResponse) => this.templatesService.errorResponse(errorResponse)
    );
  }

  delete(brand: Brand) {
    this.httpClient.post<ResponseModel>(BRANDDELETE_URL, brand).subscribe(
      (response) => {
        this.toastrService.success(response.message);
        window.location.reload();
      },
      (errorResponse) => this.templatesService.errorResponse(errorResponse)
    );
  }

  getAll(): Observable<ListResponseModel<Brand>> {
    return this.httpClient.get<ListResponseModel<Brand>>(GETBRANDS_URL);
  }
}
