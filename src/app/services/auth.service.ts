import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { TokenKey } from 'src/app/models/constants/local-storage-keys';
import { AdminRole } from 'src/app/models/constants/roles';
import {
  LOGIN_URL,
  REGISTER_URL,
  UPDPASS_URL
} from 'src/app/models/constants/urls';
import { LoginModel } from 'src/app/models/entity-models/auth/loginModel';
import { RegisterModel } from 'src/app/models/entity-models/auth/registerModel';
import { TokenModel } from 'src/app/models/entity-models/auth/tokenModel';
import { UpdatePasswordDTO } from 'src/app/models/entity-models/dto/update-password-dto';
import { ResponseModel } from 'src/app/models/response-models/responseModel';
import { SingleResponseModel } from 'src/app/models/response-models/singleResponseModel';
import { LocalStorageService } from './local-storage.service';
import { RouterService } from './router.service';
import { TemplatesService } from './templates.service';


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

  login(loginModel: LoginModel) {
    this.httpClient
      .post<SingleResponseModel<TokenModel>>(LOGIN_URL, loginModel)
      .subscribe(
        (response) => {
          this.localStorageService.save(TokenKey, response.data.token);
          this.toastrService.success(response.message);
          this.routerService.homePage();
        },
        (errorResponse) => this.templatesService.errorResponse(errorResponse)
      );
  }

  register(registerModel: RegisterModel) {
    this.httpClient
      .post<SingleResponseModel<TokenModel>>(REGISTER_URL, registerModel)
      .subscribe(
        (response) => {
          this.localStorageService.save(TokenKey, response.data.token);
          this.toastrService.success(response.message);
          this.routerService.loginPage();
        },
        (errorResponse) => this.templatesService.errorResponse(errorResponse)
      );
  }

  logout() {
    this.localStorageService.remove(TokenKey);
    window.location.reload();
  }

  updatePassword(updatePasswordDTO: UpdatePasswordDTO) {
    this.httpClient
      .post<ResponseModel>(UPDPASS_URL, updatePasswordDTO)
      .subscribe(
        (response) => {
          this.toastrService.success(response.message);
          window.location.reload();
        },
        (errorResponse) => this.templatesService.errorResponse(errorResponse)
      );
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
    if (!this.loggedIn()) return false;

    let decodedToken = this.getDecodedToken;

    let roleString = Object.keys(decodedToken).filter((t) =>
      t.endsWith('/role')
    )[0];

    if (roleString) {
      return decodedToken[roleString].includes(AdminRole);
    }
    return false;
  }
}
