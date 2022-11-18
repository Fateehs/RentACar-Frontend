import { Component, OnInit } from '@angular/core';
import { RentalDetailDTO } from 'src/app/models/entity-models/dto/rental-detail-dto';
import { RentalService } from 'src/app/services/rental.service';


@Component({
  selector: 'app-rental-detail-list',
  templateUrl: './rental-detail-list.component.html',
  styleUrls: ['./rental-detail-list.component.css'],
})
export class RentalDetailListComponent implements OnInit {
  rentalDetailDTOs: RentalDetailDTO[];
  constructor(private rentalService: RentalService) {}

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails() {
    this.rentalService.getDetails().subscribe((response) => {
      this.rentalDetailDTOs = response.data;
    });
  }
}
