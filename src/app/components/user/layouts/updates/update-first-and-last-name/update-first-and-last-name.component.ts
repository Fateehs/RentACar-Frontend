import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UpdateFirstAndLastNameDTO } from 'src/app/models/entitymodels/update-first-and-last-name-dto';
import { UserDTO } from 'src/app/models/entitymodels/user-dto';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';
import { UserChildComponentBaseComponent } from '../../../bases/user-child-component-base/user-child-component-base.component';

@Component({
  selector: 'app-update-first-and-last-name',
  templateUrl: './update-first-and-last-name.component.html',
  styleUrls: ['./update-first-and-last-name.component.css'],
})
export class UpdateFirstAndLastNameComponent
  extends UserChildComponentBaseComponent
  implements OnInit
{
  @Input() currentUserDTOFromParent: UserDTO;

  updateFormGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public override authService: AuthService,
    private userService: UserService,
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
      firstName: [this.currentUserDTOFromParent.firstName, Validators.required],
      lastName: [this.currentUserDTOFromParent.lastName, Validators.required],
    });
  }

  updateFirstAndLastName() {
    if (this.updateFormGroup.valid) {
      let updateFirstAndLastNameDTO: UpdateFirstAndLastNameDTO = Object.assign(
        {},
        this.updateFormGroup.value
      );
      updateFirstAndLastNameDTO.userId = this.currentUserDTOFromParent.userId;
      this.userService.updateFirstAndLastName(updateFirstAndLastNameDTO);
    } else this.toastrService.error('Form Has Absent Values');
  }
}
