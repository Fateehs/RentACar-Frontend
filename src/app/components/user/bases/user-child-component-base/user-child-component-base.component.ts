import { Component, OnInit } from '@angular/core';
import { CommonChildComponentBaseComponent } from 'src/app/components/public/bases/common-child-component-base/common-child-component-base.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-child-component-base',
  templateUrl: './user-child-component-base.component.html',
  styleUrls: ['./user-child-component-base.component.css']
})
export class UserChildComponentBaseComponent extends CommonChildComponentBaseComponent {

  constructor(public override authService:AuthService) {super(authService) }

  loggedIn(){
    return this.authService.loggedIn()
  }

}
