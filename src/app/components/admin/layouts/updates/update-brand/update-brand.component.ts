import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/entity-models/entities/brand';
import { AuthService } from 'src/app/services/auth.service';
import { BrandService } from 'src/app/services/brand.service';
import { AdminChildComponentBaseComponent } from '../../../bases/admin-child-component-base/admin-child-component-base.component';

@Component({
  selector: 'app-update-brand',
  templateUrl: './update-brand.component.html',
  styleUrls: ['./update-brand.component.css']
})
export class UpdateBrandComponent extends AdminChildComponentBaseComponent implements OnInit {
  @Input() currentBrandFromParent: Brand

  updateFormGroup: FormGroup
  constructor(private brandService: BrandService, private formBuilder: FormBuilder, private toastrService: ToastrService,
    public override authService:AuthService) { 
      super(authService) 
      this.innerHTML = 'Update'
    }

  ngOnInit(): void {
    this.createUpdateFormGroup()
  }

  createUpdateFormGroup() {
    this.updateFormGroup = this.formBuilder.group({
      name: [this.currentBrandFromParent.brandName, Validators.required]
    })
  }

  update() {
    if (this.updateFormGroup.valid) {
      let brand: Brand = Object.assign({ id: this.currentBrandFromParent.brandName}, this.updateFormGroup.value)
      this.brandService.update(brand);
    }
    else this.toastrService.error("Form has absent values");

  }
}