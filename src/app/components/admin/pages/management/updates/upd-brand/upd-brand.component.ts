import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand/brand.service';

@Component({
  selector: 'app-upd-brand',
  templateUrl: './upd-brand.component.html',
  styleUrls: ['./upd-brand.component.css'],
})
export class UpdBrandComponent implements OnInit {
  brandUpdateForm: FormGroup;
  constructor(
    private toastrService: ToastrService,
    private brandService: BrandService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createBrandUpdateForm();
  }

  createBrandUpdateForm() {
    this.brandUpdateForm = this.formBuilder.group({
      brandId: ['', Validators.required],
      brandName: ['', Validators.required],
    });
  }

  update() {
    if (this.brandUpdateForm.valid) {
      let brandModel = Object.assign({}, this.brandUpdateForm.value);
      this.brandService.update(brandModel);
    } else {
      this.toastrService.error('Form Has Absent Values', 'Be Carefull');
    }
  }
}
