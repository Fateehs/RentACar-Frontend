import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  GETUDTO_URL,
  UPDMAIL_URL,
  UPDNAME_URL,
} from 'src/app/models/constants/urls';
import { UpdateEmailDTO } from 'src/app/models/entitymodels/update-email-dto';
import { UpdateFirstAndLastNameDTO } from 'src/app/models/entitymodels/update-first-and-last-name-dto';
import { UserDTO } from 'src/app/models/entitymodels/user-dto';
import { ResponseModel } from 'src/app/models/responsemodels/responseModel';
import { SingleResponseModel } from 'src/app/models/responsemodels/singleResponseModel';
import { AuthService } from '../auth/auth.service';
import { TemplatesService } from '../template/templates.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
    private toastrService: ToastrService,
    private templatesService: TemplatesService
  ) {}

  updateFirstAndLastName(updateFirstAndLastNameDTO: UpdateFirstAndLastNameDTO) {
    this.httpClient
      .post<ResponseModel>(UPDNAME_URL, updateFirstAndLastNameDTO)
      .subscribe(
        (response) => {
          this.toastrService.success(response.message);
          window.location.reload();
        },
        (errorResponse) => this.templatesService.errorResponse(errorResponse)
      );
  }

  updateEmail(updateEmailDTO: UpdateEmailDTO) {
    this.httpClient.post<ResponseModel>(UPDMAIL_URL, updateEmailDTO).subscribe(
      (response) => {
        this.toastrService.success(response.message);
        window.location.reload();
      },
      (errorResponse) => this.templatesService.errorResponse(errorResponse)
    );
  }

  getDTOById(userId: number) {
    return this.httpClient.get<SingleResponseModel<UserDTO>>(
      GETUDTO_URL + userId
    );
  }

  getCurrentUserDTO() {
    let currentUserId = this.authService.getCurrentUserId;
    return this.getDTOById(currentUserId);
  }
}
