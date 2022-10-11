import { Rental } from "../entitymodels/rental";
import { ResponseModel } from "./responseModel";

export interface RentalResponseModel extends ResponseModel{
    data: Rental[]
}