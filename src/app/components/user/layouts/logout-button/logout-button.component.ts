import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserChildComponentBaseComponent } from '../../bases/user-child-component-base/user-child-component-base.component';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.css'],
})
export class LogoutButtonComponent
  extends UserChildComponentBaseComponent
  implements OnInit
{
  constructor(public override authService: AuthService) {
    super(authService);
    this.innerHTML = 'Logout';
  }

  ngOnInit(): void {}

  logout() {
    this.authService.logout();
  }
}
