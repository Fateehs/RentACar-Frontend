import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { RouterService } from 'src/app/services/router/router.service';
import { AdminChildComponentBaseComponent } from '../../../bases/admin-child-component-base/admin-child-component-base.component';

@Component({
  selector: 'app-route-to-rental-detail-list-page-button',
  templateUrl: './route-to-rental-detail-list-page-button.component.html',
  styleUrls: ['./route-to-rental-detail-list-page-button.component.css']
})
export class RouteToRentalDetailListPageButtonComponent extends AdminChildComponentBaseComponent implements OnInit {

  constructor(private routerService:RouterService, public override authService:AuthService) {
    super(authService)
    this.innerHTML = 'Detailed Rental List'
   }

  ngOnInit(): void {
  }

  routeToRentalDetailListPage(){
    this.routerService.rentalDetailListPage()
  }
}
