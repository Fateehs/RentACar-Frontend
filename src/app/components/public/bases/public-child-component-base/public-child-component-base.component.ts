import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authservice/auth.service';
import { CommonChildComponentBaseComponent } from '../common-child-component-base/common-child-component-base.component';

@Component({
  selector: 'app-public-child-component-base',
  templateUrl: './public-child-component-base.component.html',
  styleUrls: ['./public-child-component-base.component.css']
})
export class PublicChildComponentBaseComponent extends CommonChildComponentBaseComponent {

  constructor(public override authService:AuthService) { super(authService)}

  isAuthenticated(){
    return this.authService.isAuthenticated()
  }
}
