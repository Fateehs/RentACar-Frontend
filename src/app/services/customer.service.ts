import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  GETCUSTOMERBYID_URL,
  GETCUSTOMERBYUSERID_URL,
  GETCUSTOMERS_URL,
} from 'src/app/models/constants/urls';
import { Customer } from 'src/app/models/entity-models/entities/customer';
import { ListResponseModel } from 'src/app/models/response-models/listResponseModel';
import { SingleResponseModel } from 'src/app/models/response-models/singleResponseModel';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  getAll(): Observable<ListResponseModel<Customer>> {
    return this.httpClient.get<ListResponseModel<Customer>>(GETCUSTOMERS_URL);
  }

  getById(customerId: number): Observable<SingleResponseModel<Customer>> {
    return this.httpClient.get<SingleResponseModel<Customer>>(
      GETCUSTOMERBYID_URL + customerId
    );
  }

  getByUserId(userId: number):Observable<SingleResponseModel<Customer>>{
    return this.httpClient.get<SingleResponseModel<Customer>>(GETCUSTOMERBYUSERID_URL+userId)
  }

  getCurrentCustomer():Observable<SingleResponseModel<Customer>>{
    let currentUserId = this.authService.getCurrentUserId
    return this.getByUserId(currentUserId)
  }
}
