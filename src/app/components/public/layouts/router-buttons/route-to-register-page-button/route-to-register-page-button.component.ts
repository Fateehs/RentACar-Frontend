import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { RouterService } from 'src/app/services/router/router.service';
import { PublicChildComponentBaseComponent } from '../../../bases/public-child-component-base/public-child-component-base.component';

@Component({
  selector: 'app-route-to-register-page-button',
  templateUrl: './route-to-register-page-button.component.html',
  styleUrls: ['./route-to-register-page-button.component.css'],
})
export class RouteToRegisterPageButtonComponent
  extends PublicChildComponentBaseComponent
  implements OnInit
{
  constructor(
    private routerService: RouterService,
    public override authService: AuthService
  ) {
    super(authService);
    this.innerHTML = 'Register';
  }

  ngOnInit(): void {}

  routeToRegisterPage() {
    this.routerService.registerPage();
  }
}
