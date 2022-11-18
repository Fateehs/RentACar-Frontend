import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RouterService } from 'src/app/services/router.service';

import { AdminChildComponentBaseComponent } from '../../../bases/admin-child-component-base/admin-child-component-base.component';

@Component({
  selector: 'app-route-to-color-list-page-button',
  templateUrl: './route-to-color-list-page-button.component.html',
  styleUrls: ['./route-to-color-list-page-button.component.css']
})
export class RouteToColorListPageButtonComponent extends AdminChildComponentBaseComponent implements OnInit {

  constructor(private routerService:RouterService, public override authService:AuthService) {
    super(authService)
    this.innerHTML = 'Color List'
   }

  ngOnInit(): void {
  }

  routeToColorListPage(){
    this.routerService.colorListPage();
  }

}
