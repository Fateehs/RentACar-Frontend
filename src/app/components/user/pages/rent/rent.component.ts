import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarId } from 'src/app/models/constants/entity-ids';
import { RentalKey } from 'src/app/models/constants/local-storage-keys';
import { Customer } from 'src/app/models/entitymodels/customer';
import { Rental } from 'src/app/models/entitymodels/rental';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { RentalService } from 'src/app/services/rental/rental.service';
import { RouterService } from 'src/app/services/router/router.service';
import { TemplatesService } from 'src/app/services/template/templates.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css'],
})
export class RentComponent implements OnInit {
  addFormGroup: FormGroup;
  currentCarId: number;
  currentCustomer: Customer;
  constructor(
    private localStorageService: LocalStorageService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private routerService: RouterService,
    private rentalService: RentalService,
    private templatesService: TemplatesService,
    private toastrService: ToastrService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.getCurrentCustomer();
    this.createAddFormGroup();

    this.activatedRoute.params.subscribe((params) => {
      if (params[CarId]) this.currentCarId = Number(params[CarId]);
    });
  }

  createAddFormGroup() {
    this.addFormGroup = this.formBuilder.group({
      rentDate: ['', Validators.required],
      returnDate: [null],
    });
  }

  rentInfoSave() {
    if (this.addFormGroup.valid) {
      let rental: Rental = Object.assign({}, this.addFormGroup.value);
      rental.carId = this.currentCarId;
      rental.customerId = this.currentCustomer.customerId;
      rental.returnDate = rental.returnDate ? rental.returnDate : null;

      this.rentalService.rulesForAdding(rental).subscribe(
        (response) => {
          this.localStorageService.save(RentalKey, rental);
          this.routerService.paymentPage();
        },
        (errorResponse) => this.templatesService.errorResponse(errorResponse)
      );
    } else {
      this.toastrService.error('Form is absent');
    }
  }

  getCurrentCustomer() {
    this.customerService.getCurrentCustomer().subscribe((response) => {
      this.currentCustomer = response.data;
    });
  }
}
