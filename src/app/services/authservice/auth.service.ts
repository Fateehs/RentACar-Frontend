import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterModel } from 'src/app/models/entitymodels/auth/registerModel';
import { LOGIN_URL, REGISTER_URL } from 'src/app/models/constants/urls';
import { SingleResponseModel } from 'src/app/models/responsemodels/singleResponseModel';
import { TokenModel } from 'src/app/models/entitymodels/auth/tokenModel';
import { LoginModel } from 'src/app/models/entitymodels/auth/loginModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  register(registerModel: RegisterModel) {
    let regPath = REGISTER_URL;
    return this.httpClient.post<SingleResponseModel<RegisterModel>>(
      regPath,
      registerModel
    );
  }

  login(loginModel: LoginModel) {
    let loginPath = LOGIN_URL;
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      loginPath,
      loginModel
    );
  }

  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}
