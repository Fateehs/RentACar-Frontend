import { Customer } from "../entitymodels/customer";
import { ResponseModel } from "./responseModel";

export interface CustomerResponseModel extends ResponseModel{
    data: Customer[]
}