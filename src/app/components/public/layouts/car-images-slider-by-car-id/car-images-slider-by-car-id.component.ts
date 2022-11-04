import { Component, Input, OnInit } from '@angular/core';
import { BASE_URL, DELCARIMAGE_URL } from 'src/app/models/constants/urls';
import { CarImage } from 'src/app/models/entitymodels/car/carImage';
import { CarImageService } from 'src/app/services/car-image/carimage.service';

@Component({
  selector: 'app-car-images-slider-by-car-id',
  templateUrl: './car-images-slider-by-car-id.component.html',
  styleUrls: ['./car-images-slider-by-car-id.component.css'],
})
export class CarImagesSliderByCarIdComponent implements OnInit {
  @Input() currentCarIdFromParent: number;

  carImages: CarImage[];
  constructor(private carImagesService: CarImageService) {}

  ngOnInit(): void {
    if (this.currentCarIdFromParent)
      this.getAllByCarId(this.currentCarIdFromParent);
  }

  getAllByCarId(carId: number) {
    this.carImagesService.getAllByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
    });
  }

  getFullImagePath(imagePath: string) {
    return BASE_URL + imagePath;
  }

  getActiveString(carImage: CarImage) {
    if (carImage === this.carImages[0]) {
      return 'active';
    }
    return '';
  }
}
