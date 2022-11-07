import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UpdatePasswordDTO } from 'src/app/models/entitymodels/update-password-dto';
import { UserDTO } from 'src/app/models/entitymodels/user-dto';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserChildComponentBaseComponent } from '../../../bases/user-child-component-base/user-child-component-base.component';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css'],
})
export class UpdatePasswordComponent
  extends UserChildComponentBaseComponent
  implements OnInit
{
  @Input() currentUserDTOFromParent: UserDTO;

  updateFormGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public override authService: AuthService,
    private toastrService: ToastrService
  ) {
    super(authService);
    this.innerHTML = 'Update';
    this.classFromParent = 'list-group-item';
  }

  ngOnInit(): void {
    this.createUpdateFormGroup();
  }

  createUpdateFormGroup() {
    this.updateFormGroup = this.formBuilder.group({
      password: ['', Validators.required],
      newPassword: ['', Validators.required],
      newPasswordAgain: ['', Validators.required],
    });
  }

  updatePassword() {
    if (this.updateFormGroup.valid) {
      let updatePasswordDTO: UpdatePasswordDTO = Object.assign(
        {},
        this.updateFormGroup.value
      );
      updatePasswordDTO.userId = this.currentUserDTOFromParent.userId;
      this.authService.updatePassword(updatePasswordDTO);
    } else this.toastrService.error('Form Has Absent Values');
  }
}
