import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  CHECKCARD_URL,
  PAYDEL_URL,
  GETPAYCUSTOMERID_URL,
  PAYADD_URL,
  PAYMENT_URL,
  PAY_URL,
} from 'src/app/models/constants/urls';
import { Payment } from 'src/app/models/entity-models/entities/payment';
import { ListResponseModel } from 'src/app/models/response-models/listResponseModel';
import { ResponseModel } from 'src/app/models/response-models/responseModel';
import { TemplatesService } from './templates.service';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(
    private htttpClient: HttpClient,
    private toastrService: ToastrService,
    private templatesService: TemplatesService
  ) {}

  pay(payment: Payment) {
    return this.htttpClient.post<ResponseModel>(PAY_URL, payment);
  }

  add(payment: Payment) {
    this.htttpClient.post<ResponseModel>(PAYADD_URL, payment).subscribe(
      (response) => {
        this.toastrService.success(response.message);
      },
      (errorResponse) => this.templatesService.errorResponse(errorResponse)
    );
  }

  delete(payment: Payment) {
    this.htttpClient.post<ResponseModel>(PAYDEL_URL, payment).subscribe(
      (response) => {
        this.toastrService.success(response.message);
        window.location.reload();
      },
      (errorResponse) => this.templatesService.errorResponse(errorResponse)
    );
  }

  getAllByCustomerId(customerId: number) {
    return this.htttpClient.get<ListResponseModel<Payment>>(
      GETPAYCUSTOMERID_URL + customerId
    );
  }

  checkIfThisCardIsAlreadySavedForThisCustomer(payment: Payment) {
    return this.htttpClient.post<ResponseModel>(CHECKCARD_URL, payment);
  }
}
