import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import {
  RENTALADD_URL,
  RENTALDETAILS_URL,
  RENTALRULES_URL,
} from 'src/app/models/constants/urls';
import { Payment } from 'src/app/models/entity-models/entities/payment';
import { Rental } from 'src/app/models/entity-models/entities/rental';
import { RentalDetailDTO } from 'src/app/models/entity-models/dto/rental-detail-dto';
import { ListResponseModel } from 'src/app/models/response-models/listResponseModel';
import { ResponseModel } from 'src/app/models/response-models/responseModel';
import { PaymentService } from './payment.service';
import { RouterService } from './router.service';
import { TemplatesService } from './templates.service';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  constructor(
    private httpClient: HttpClient,
    private toastrService: ToastrService,
    private templatesService: TemplatesService,
    private paymentService: PaymentService,
    private routerService: RouterService
  ) {}

  payAndRent(payment: Payment, rental: Rental) {
    this.paymentService.pay(payment).subscribe(
      (response) => {
        this.toastrService.success(response.message);
        this.add(rental);
      },
      (errorResponse) => this.templatesService.errorResponse(errorResponse)
    );
  }

  add(rental: Rental) {
    this.httpClient.post<ResponseModel>(RENTALADD_URL, rental).subscribe(
      (response) => {
        this.toastrService.success(response.message);
        this.routerService.homePage();
      },
      (errorResponse) => this.templatesService.errorResponse(errorResponse)
    );
  }

  rulesForAdding(rental: Rental) {
    return this.httpClient.post<ResponseModel>(RENTALRULES_URL, rental);
  }

  getDetails(): Observable<ListResponseModel<RentalDetailDTO>> {
    return this.httpClient.get<ListResponseModel<RentalDetailDTO>>(
      RENTALDETAILS_URL
    );
  }
}
