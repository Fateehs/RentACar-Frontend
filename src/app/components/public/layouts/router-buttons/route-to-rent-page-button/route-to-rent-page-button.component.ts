import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { RouterService } from 'src/app/services/router/router.service';
import { PublicChildComponentBaseComponent } from '../../../bases/public-child-component-base/public-child-component-base.component';

@Component({
  selector: 'app-route-to-rent-page-button',
  templateUrl: './route-to-rent-page-button.component.html',
  styleUrls: ['./route-to-rent-page-button.component.css'],
})
export class RouteToRentPageButtonComponent
  extends PublicChildComponentBaseComponent
  implements OnInit
{
  @Input() currentCarIdFromParent: number;
  constructor(
    private routerService: RouterService,
    public override authService: AuthService
  ) {
    super(authService);
    this.innerHTML = 'Rent';
  }

  ngOnInit(): void {}

  routeToRentPage() {
    this.routerService.rentPage(this.currentCarIdFromParent);
  }
}
