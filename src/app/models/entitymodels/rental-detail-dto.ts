export interface RentalDetailDTO {
  rentalId: number;
  brandName: string;
  fullName: string;
  rentDate: Date;
  returnDate?: Date;
}
