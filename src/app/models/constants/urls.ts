// BASE URLs
export const BASE_URL = 'https://localhost:44315/'
export const API_URL = BASE_URL + 'api/'

// AUTHORIZATION URLs
export const AUTH_URL = API_URL + 'auth/';
export const REGISTER_URL = AUTH_URL + 'register'
export const LOGIN_URL = AUTH_URL + 'login'

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

// RENTAL MANAGEMENT
export const RENTAL_URL = API_URL + 'rentals/'
export const RENTALADD_URL = RENTAL_URL + 'add'
export const RENTALRULES_URL = RENTAL_URL + 'rulesforadding'
export const RENTALDETAILS_URL = RENTAL_URL + 'getdetails'

// CUSTOMER MANAGEMENT
export const CUSTOMER_URL = API_URL + 'customers/'
export const GETCUSTOMERS_URL = CUSTOMER_URL + 'getall'
export const GETCUSTOMERBYID_URL = CUSTOMER_URL + 'getbyid?id='
export const GETCUSTOMERBYUSERID_URL = CUSTOMER_URL + 'getbyuserid?userId='

// PAYMENT MANAGEMENT
export const PAYMENT_URL = API_URL + 'payments/'
export const PAY_URL = PAYMENT_URL + 'pay'
export const DELPAY_URL = PAYMENT_URL + 'delete'
export const GETPAYCUSTOMERID_URL = PAYMENT_URL + 'getallbycustomerid?customerId='
export const CHECKCARD_URL = PAYMENT_URL + 'checkIfThisCardIsAlreadySavedForThisCustomer'