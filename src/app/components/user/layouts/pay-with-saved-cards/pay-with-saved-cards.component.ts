import { Component, OnInit } from '@angular/core';
import { RentalKey } from 'src/app/models/constants/local-storage-keys';
import { Payment } from 'src/app/models/entity-models/entities/payment';
import { Rental } from 'src/app/models/entity-models/entities/rental';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PaymentService } from 'src/app/services/payment.service';
import { RentalService } from 'src/app/services/rental.service';


@Component({
  selector: 'app-pay-with-saved-cards',
  templateUrl: './pay-with-saved-cards.component.html',
  styleUrls: ['./pay-with-saved-cards.component.css'],
})
export class PayWithSavedCardsComponent implements OnInit {
  payments: Payment[];
  currentRental: Rental;
  constructor(
    private paymentService: PaymentService,
    private rentalService: RentalService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.getCurrentRental();
    this.getAllByCustomerId();
  }

  payWithSavedCard(payment: Payment) {
    this.rentalService.payAndRent(payment, this.currentRental);
  }

  getAllByCustomerId() {
    this.paymentService
      .getAllByCustomerId(this.currentRental.customerId)
      .subscribe((response) => {
        this.payments = response.data;
      });
  }

  getCurrentRental() {
    this.currentRental =
      this.localStorageService.getWithType<Rental>(RentalKey);
  }
}
