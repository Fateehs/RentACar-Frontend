import { CarImage } from "./carImage";

export interface CarDetailDto {
    carId: number;
    brandId: number;
    colorId: number;
    imagePath: CarImage[];
    carName: string;
    brandName: string;
    colorName: string;
    modelYear?: Date;
    dailyPrice: number;
  }