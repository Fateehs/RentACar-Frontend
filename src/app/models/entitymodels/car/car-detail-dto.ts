import { CarImage } from './carImage';

export interface CarDetailDTO {
  carId: number;
  brandId: number;
  colorId: number;
  imagePath: CarImage[];
  carName: string;
  brandName: string;
  colorName: string;
  modelYear?: Date;
  dailyPrice: number;
  description: string;
  findeksPoint: number;
}
