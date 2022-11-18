import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RouterService } from 'src/app/services/router.service';

import { AdminChildComponentBaseComponent } from '../../../bases/admin-child-component-base/admin-child-component-base.component';

@Component({
  selector: 'app-route-to-add-color-page-button',
  templateUrl: './route-to-add-color-page-button.component.html',
  styleUrls: ['./route-to-add-color-page-button.component.css'],
})
export class RouteToAddColorPageButtonComponent
  extends AdminChildComponentBaseComponent
  implements OnInit
{
  constructor(
    private routerService: RouterService,
    public override authService: AuthService
  ) {
    super(authService);
    this.innerHTML = 'Add Color';
  }

  ngOnInit(): void {}

  routeToAddColorPage() {
    this.routerService.addColorPage();
  }
}
