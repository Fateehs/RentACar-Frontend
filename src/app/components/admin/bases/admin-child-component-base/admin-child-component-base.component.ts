import { Component, OnInit } from '@angular/core';
import { CommonChildComponentBaseComponent } from 'src/app/components/public/bases/common-child-component-base/common-child-component-base.component';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-admin-child-component-base',
  templateUrl: './admin-child-component-base.component.html',
  styleUrls: ['./admin-child-component-base.component.css'],
})
export class AdminChildComponentBaseComponent extends CommonChildComponentBaseComponent {
  constructor(public override authService: AuthService) {
    super(authService);
  }

  isAdmin() {
    return this.authService.isAdmin();
  }
}
