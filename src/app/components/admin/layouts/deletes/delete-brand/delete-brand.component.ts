import { Component, Input, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/entitymodels/brand';
import { AuthService } from 'src/app/services/auth/auth.service';
import { BrandService } from 'src/app/services/brand/brand.service';
import { AdminChildComponentBaseComponent } from '../../../bases/admin-child-component-base/admin-child-component-base.component';

@Component({
  selector: 'app-delete-brand',
  templateUrl: './delete-brand.component.html',
  styleUrls: ['./delete-brand.component.css'],
})
export class DeleteBrandComponent
  extends AdminChildComponentBaseComponent
  implements OnInit
{
  @Input() currentBrandFromParent: Brand;

  constructor(
    private brandService: BrandService,
    public override authService: AuthService
  ) {
    super(authService);
    this.innerHTML = 'Delete';
  }

  ngOnInit(): void {}

  delete() {
    this.brandService.delete(this.currentBrandFromParent);
  }
}
