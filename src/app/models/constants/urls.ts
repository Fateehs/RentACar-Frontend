// BASE URLs
export const BASE_URL = 'https://localhost:44315/';
export const API_URL = BASE_URL + 'api/';

// AUTHORIZATION URLs
export const AUTH_URL = API_URL + 'auth/';
export const REGISTER_URL = AUTH_URL + 'register';
export const LOGIN_URL = AUTH_URL + 'login';

// CAR MANAGEMENT
export const CAR_URL = API_URL + 'cars/'
export const CARADD_URL = CAR_URL + 'add'
export const CARUPD_URL = CAR_URL + 'update'
export const CARDEL_URL = CAR_URL + 'delete'
export const GETCARS_URL = CAR_URL + 'getall'
export const GETCARBYID_URL = CAR_URL + 'getbyid?carId='
export const GETCARDETAILBYID_URL = CAR_URL + 'getdetailbyid?carId='
export const GETCARDETAILS_URL = CAR_URL + 'getdetails'
export const GETDETAILSBYBRANDID_URL = CAR_URL + 'getdetailsbybrandid?brandId='
export const GETDETAILSBYCOLORID_URL = CAR_URL + 'getdetailsbycolorid?colorId='

// BRAND MANAGEMENT
export const BRAND_URL = API_URL + 'brands/'
export const GETBRANDS_URL = BRAND_URL + 'getall'

// COLOR MANAGEMENT
export const COLOR_URL = API_URL + 'colors/'
export const GETCOLORS_URL = COLOR_URL + 'getall'

// IMAGE MANAGEMENT
export const CARIMG_URL = API_URL + 'carImages/'
export const GETALLIMGBYCARID_URL = CARIMG_URL + 'getallbycarid?carId='
export const DELCARIMAGE_URL = CARIMG_URL + 'delete?id='