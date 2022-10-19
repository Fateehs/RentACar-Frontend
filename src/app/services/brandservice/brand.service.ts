import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/models/entitymodels/brand';
import { ListResponseModel } from 'src/app/models/responsemodels/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = "https://localhost:44315/api/brands/getall";

  getBrands() : Observable<ListResponseModel<Brand>>{
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl);
  }
}
