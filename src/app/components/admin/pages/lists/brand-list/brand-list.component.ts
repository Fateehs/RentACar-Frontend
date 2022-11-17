import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/entitymodels/brand';
import { BrandService } from 'src/app/services/brand/brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css'],
})
export class BrandListComponent implements OnInit {
  filterText: string;
  brands: Brand[];

  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.brandService.getAll().subscribe((response) => {
      this.brands = response.data;
    });
  }
}
