import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from 'src/app/models/entitymodels/rental';
import { ListResponseModel } from 'src/app/models/responsemodels/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = "https://localhost:44315/api/rentals/getrentaldetails"

  getRentals(): Observable<ListResponseModel<Rental>>{
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl);
  }
}
