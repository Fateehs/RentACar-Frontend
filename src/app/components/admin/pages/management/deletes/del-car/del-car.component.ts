import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-del-car',
  templateUrl: './del-car.component.html',
  styleUrls: ['./del-car.component.css'],
})
export class DelCarComponent implements OnInit {
  carDeleteForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createCarDeleteForm();
  }

  createCarDeleteForm() {
    this.carDeleteForm = this.formBuilder.group({
      carId: ['', Validators.required],
    });
  }

  delete() {
    if (this.carDeleteForm.valid) {
      let carModel = Object.assign({}, this.carDeleteForm.value);
      this.carService.delete(carModel);
    } else {
      this.toastrService.error('Form Has Absent Values', 'Be Carefull');
    }
  }
}
