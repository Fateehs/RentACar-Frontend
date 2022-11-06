import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminChildComponentBaseComponent } from 'src/app/components/admin/bases/admin-child-component-base/admin-child-component-base.component';
import { Brand } from 'src/app/models/entitymodels/brand';
import { Car } from 'src/app/models/entitymodels/car/car';
import { Color } from 'src/app/models/entitymodels/color';
import { AuthService } from 'src/app/services/auth/auth.service';
import { BrandService } from 'src/app/services/brand/brand.service';
import { CarService } from 'src/app/services/car/car.service';
import { ColorService } from 'src/app/services/color/color.service';

@Component({
  selector: 'app-upd-car',
  templateUrl: './upd-car.component.html',
  styleUrls: ['./upd-car.component.css'],
})
export class UpdCarComponent implements OnInit {
  carUpdateForm: FormGroup;

  constructor(
    private carService: CarService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createUpdateFormGroup();
  }

  createUpdateFormGroup() {
    this.carUpdateForm = this.formBuilder.group({
      carId: ['', Validators.required],
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      carName: ['', Validators.required],
      modelYear: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  update() {
    if (this.carUpdateForm.valid) {
      let carModel = Object.assign({}, this.carUpdateForm.value);
      this.carService.update(carModel);
    } else {
      this.toastrService.error('Form Has Absent Values', 'Be Carefull');
    }
  }
}
