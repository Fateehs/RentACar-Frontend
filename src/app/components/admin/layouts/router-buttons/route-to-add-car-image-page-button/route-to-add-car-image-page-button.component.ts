import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RouterService } from 'src/app/services/router.service';

import { AdminChildComponentBaseComponent } from '../../../bases/admin-child-component-base/admin-child-component-base.component';

@Component({
  selector: 'app-route-to-add-car-image-page-button',
  templateUrl: './route-to-add-car-image-page-button.component.html',
  styleUrls: ['./route-to-add-car-image-page-button.component.css'],
})
export class RouteToAddCarImagePageButtonComponent
  extends AdminChildComponentBaseComponent
  implements OnInit
{
  @Input() currentCarIdFromParent: number;
  constructor(
    private routerService: RouterService,
    public override authService: AuthService
  ) {
    super(authService);
    this.innerHTML = 'Add Car Image';
  }

  ngOnInit(): void {}

  routeToAddCarImagePageByCarId() {
    this.routerService.addCarImagePageByCarId(this.currentCarIdFromParent);
  }
}
