import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/entitymodels/customer';
import { ListResponseModel } from 'src/app/models/responsemodels/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient : HttpClient) { }

  apiUrl = "https://localhost:44315/api/customers/getall"

  getCustomers():Observable<ListResponseModel<Customer>>{
    return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl);
  }
}
