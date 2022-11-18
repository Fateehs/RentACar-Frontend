
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RouterService } from 'src/app/services/router.service';
import { AdminChildComponentBaseComponent } from '../../../bases/admin-child-component-base/admin-child-component-base.component';

@Component({
  selector: 'app-route-to-brand-list-page-button',
  templateUrl: './route-to-brand-list-page-button.component.html',
  styleUrls: ['./route-to-brand-list-page-button.component.css'],
})
export class RouteToBrandListPageButtonComponent
  extends AdminChildComponentBaseComponent
  implements OnInit
{
  constructor(
    private routerService: RouterService,
    public override authService: AuthService
  ) {
    super(authService);
    this.innerHTML = 'Brand List';
  }

  ngOnInit(): void {}

  routeToBrandListPage() {
    this.routerService.brandListPage();
  }
}
