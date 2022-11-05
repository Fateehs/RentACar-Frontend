import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RentalKey } from 'src/app/models/constants/local-storage-keys';
import { SaveYourCreditCard } from 'src/app/models/constants/questions';
import { Payment } from 'src/app/models/entitymodels/payment';
import { Rental } from 'src/app/models/entitymodels/rental';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { RentalService } from 'src/app/services/rental/rental.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css'],
})
export class PayComponent implements OnInit {
  payFormGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private paymentService: PaymentService,
    private rentalService: RentalService,
    private localStorageService: LocalStorageService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createPayFormGroup();
  }

  createPayFormGroup() {
    this.payFormGroup = this.formBuilder.group({
      fullName: ['', Validators.required],
      cardNumber: ['', Validators.required],
      expiryMonth: ['', Validators.required],
      expiryYear: ['', Validators.required],
      cvv: ['', Validators.required],
    });
  }

  pay() {
    if (this.payFormGroup.valid) {
      let rental: Rental = this.localStorageService.get(RentalKey);
      let payment: Payment = Object.assign(
        { customerId: rental.customerId },
        this.payFormGroup.value
      );

      this.askForSave(payment);
      this.rentalService.payAndRent(payment, rental);
    } else {
      this.toastrService.error('Form is absent!');
    }
  }

  askForSave(payment: Payment) {
    this.paymentService
      .checkIfThisCardIsAlreadySavedForThisCustomer(payment)
      .subscribe(
        (response) => {
          if (confirm(SaveYourCreditCard)) this.paymentService.add(payment);
        },
        (errorResponse) => null
      );
  }
}
