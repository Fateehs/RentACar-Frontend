import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/services/routerservice/router.service';
import { Brand } from 'src/app/models/entitymodels/brand';
import { BrandService } from 'src/app/services/brandservice/brand.service';
import { ActivatedRoute } from '@angular/router';
import { BrandId } from 'src/app/models/constants/entity-ids';

@Component({
  selector: 'app-brand-select-option-car-filter',
  templateUrl: './brand-select-option-car-filter.component.html',
  styleUrls: ['./brand-select-option-car-filter.component.css'],
})
export class BrandSelectOptionCarFilterComponent implements OnInit {
  brands: Brand[];
  currentBrandId: number;
  constructor(
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute,
    private routerService: RouterService
  ) {}

  ngOnInit(): void {
    this.getAll();

    this.activatedRoute.params.subscribe((params) => {
      this.currentBrandId = params[BrandId];
    });
  }

  getAll() {
    this.brandService.getAll().subscribe((response) => {
      this.brands = response.data;
    });
  }

  routeToCarDetailsPageByBrandId() {
    this.routerService.carDetailsPageByBrandId(this.currentBrandId);
  }
}
