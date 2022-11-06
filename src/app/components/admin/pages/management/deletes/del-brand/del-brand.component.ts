import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand/brand.service';

@Component({
  selector: 'app-del-brand',
  templateUrl: './del-brand.component.html',
  styleUrls: ['./del-brand.component.css'],
})
export class DelBrandComponent implements OnInit {
  brandDeleteForm: FormGroup;
  constructor(
    private brandService: BrandService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createBrandDeleteForm();
  }

  createBrandDeleteForm() {
    this.brandDeleteForm = this.formBuilder.group({
      brandId: ['', Validators.required],
    });
  }

  delete() {
    if (this.brandDeleteForm.valid) {
      let brandModel = Object.assign({}, this.brandDeleteForm.value);
      this.brandService.add(brandModel);
    } else {
      this.toastrService.error('Form Has Absent Values', 'Be Carefull');
    }
  }
}
