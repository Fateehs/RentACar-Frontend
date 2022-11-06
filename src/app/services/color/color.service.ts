import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import {
  COLORADD_URL,
  COLORDELETE_URL,
  COLORUPDATE_URL,
  GETCOLORS_URL,
} from 'src/app/models/constants/urls';
import { Color } from 'src/app/models/entitymodels/color';
import { ListResponseModel } from 'src/app/models/responsemodels/listResponseModel';
import { ResponseModel } from 'src/app/models/responsemodels/responseModel';
import { TemplatesService } from '../template/templates.service';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  constructor(
    private httpClient: HttpClient,
    private toastrService: ToastrService,
    private templatesService: TemplatesService
  ) {}

  add(color: Color) {
    this.httpClient.post<ResponseModel>(COLORADD_URL, color).subscribe(
      (response) => {
        this.toastrService.success(response.message);
        window.location.reload();
      },
      (errorResponse) => this.templatesService.errorResponse(errorResponse)
    );
  }

  update(color: Color) {
    this.httpClient.post<ResponseModel>(COLORUPDATE_URL, color).subscribe(
      (response) => {
        this.toastrService.success(response.message);
        window.location.reload();
      },
      (errorResponse) => this.templatesService.errorResponse(errorResponse)
    );
  }

  delete(color: Color) {
    this.httpClient.post<ResponseModel>(COLORDELETE_URL, color).subscribe(
      (response) => {
        this.toastrService.success(response.message);
        window.location.reload();
      },
      (errorResponse) => this.templatesService.errorResponse(errorResponse)
    );
  }

  getAll(): Observable<ListResponseModel<Color>> {
    return this.httpClient.get<ListResponseModel<Color>>(GETCOLORS_URL);
  }
}
