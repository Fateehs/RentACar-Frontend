import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from 'src/app/models/entitymodels/color';
import { ListResponseModel } from 'src/app/models/responsemodels/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = "https://localhost:44315/api/colors/getall";

  getColors():Observable<ListResponseModel<Color>>{
    return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl);
  }
}
