import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RouterService } from 'src/app/services/router.service';

import { PublicChildComponentBaseComponent } from '../../../bases/public-child-component-base/public-child-component-base.component';

@Component({
  selector: 'app-route-to-car-detail-page-button',
  templateUrl: './route-to-car-detail-page-button.component.html',
  styleUrls: ['./route-to-car-detail-page-button.component.css'],
})
export class RouteToCarDetailPageButtonComponent
  extends PublicChildComponentBaseComponent
  implements OnInit
{
  @Input() currentCarIdFromParent: number;
  constructor(
    private routerService: RouterService,
    public override authService: AuthService
  ) {
    super(authService);
    this.innerHTML = 'Details';
  }

  ngOnInit(): void {}

  routeCarDetailPageById() {
    this.routerService.carDetailPageById(this.currentCarIdFromParent);
  }
}
