import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterModel } from 'src/app/models/entitymodels/auth/registerModel';
import { LOGIN_URL, REGISTER_URL } from 'src/app/models/constants/urls';
import { SingleResponseModel } from 'src/app/models/responsemodels/singleResponseModel';
import { TokenModel } from 'src/app/models/entitymodels/auth/tokenModel';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginModel } from 'src/app/models/entitymodels/auth/loginModel';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { ToastrService } from 'ngx-toastr';
import { TemplatesService } from '../template/templates.service';
import { RouterService } from '../router/router.service';
import { TokenKey } from 'src/app/models/constants/local-storage-keys';
import { AdminRole } from 'src/app/models/constants/roles';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  jwtHelperService: JwtHelperService = new JwtHelperService();
  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService,
    private toastrService: ToastrService,
    private templatesService: TemplatesService,
    private routerService: RouterService
  ) {}

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

  get getToken() {
    return this.localStorageService.get(TokenKey);
  }

  get getDecodedToken() {
    let token = this.getToken;
    return this.jwtHelperService.decodeToken(token);
  }

  get getCurrentUserId() {
    let decodedToken = this.getDecodedToken;
    let nameidentifierString = Object.keys(decodedToken).filter((t) =>
      t.endsWith('/nameidentifier')
    )[0];
    let userId: number = decodedToken[nameidentifierString];
    return userId;
  }

  loggedIn() {
    let token = this.getToken;
    return !this.jwtHelperService.isTokenExpired(token);
  }

  isAdmin() {
    if (!this.loggedIn()) {
      return false;
    }
    let decodedToken = this.getDecodedToken;

    let roleString = Object.keys(decodedToken).filter((t) =>
      t.endsWith('role')
    )[0];

    if (roleString)
      for (let i = 0; i < decodedToken[roleString].length; i++)
        if (decodedToken[roleString][i] === AdminRole) return true;

    return false;
  }
}
