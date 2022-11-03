import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authservice/auth.service';
import { RouterService } from 'src/app/services/routerservice/router.service';
import { PublicChildComponentBaseComponent } from '../../public/bases/public-child-component-base/public-child-component-base.component';

@Component({
  selector: 'app-route-to-car-details-page-button',
  templateUrl: './route-to-car-details-page-button.component.html',
  styleUrls: ['./route-to-car-details-page-button.component.css']
})
export class RouteToCarDetailsPageButtonComponent extends PublicChildComponentBaseComponent {

  constructor(private routerService:RouterService, public override authService: AuthService) { 
    super(authService)
    this.innerHTML = "All Cars"
  }

  ngOnInit(): void {
  }

  routeToCarDetailsPage(){
    this.routerService.carDetailsPage()
  }

}
