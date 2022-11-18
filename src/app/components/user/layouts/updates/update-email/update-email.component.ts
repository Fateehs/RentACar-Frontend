import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UpdateEmailDTO } from 'src/app/models/entity-models/dto/update-email-dto';
import { UserDTO } from 'src/app/models/entity-models/dto/user-dto';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { UserChildComponentBaseComponent } from '../../../bases/user-child-component-base/user-child-component-base.component';

@Component({
  selector: 'app-update-email',
  templateUrl: './update-email.component.html',
  styleUrls: ['./update-email.component.css'],
})
export class UpdateEmailComponent
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
      email: [this.currentUserDTOFromParent.email, Validators.required],
    });
  }

  updateEmail() {
    if (this.updateFormGroup.valid) {
      let updateEmailDTO: UpdateEmailDTO = Object.assign(
        {},
        this.updateFormGroup.value
      );
      updateEmailDTO.userId = this.currentUserDTOFromParent.userId;
      this.userService.updateEmail(updateEmailDTO);
    } else this.toastrService.error('Form Has Absent Values');
  }
}
