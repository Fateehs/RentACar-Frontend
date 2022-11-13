import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { RouterService } from 'src/app/services/router/router.service';
import { AdminChildComponentBaseComponent } from '../../../bases/admin-child-component-base/admin-child-component-base.component';

@Component({
  selector: 'app-route-to-add-brand-page-button',
  templateUrl: './route-to-add-brand-page-button.component.html',
  styleUrls: ['./route-to-add-brand-page-button.component.css']
})
export class RouteToAddBrandPageButtonComponent extends AdminChildComponentBaseComponent implements OnInit {

  constructor(private routerService:RouterService, public override authService:AuthService) {
    super(authService)
    this.innerHTML = 'Add Brand'
   }

  ngOnInit(): void {
  }
  routeToAddBrandPage(){
    this.routerService.addBrandPage()
  }

}
