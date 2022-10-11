import { Color } from "../entitymodels/color";
import { ResponseModel } from "./responseModel";

export interface ColorResponseModel extends ResponseModel{
    data: Color[]
}