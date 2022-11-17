import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/models/entitymodels/car/car';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CarService } from 'src/app/services/car/car.service';
import { AdminChildComponentBaseComponent } from '../../../bases/admin-child-component-base/admin-child-component-base.component';

@Component({
  selector: 'app-delete-car',
  templateUrl: './delete-car.component.html',
  styleUrls: ['./delete-car.component.css'],
})
export class DeleteCarComponent
  extends AdminChildComponentBaseComponent
  implements OnInit
{
  @Input() currentCarFromParent: Car;
  constructor(
    private carService: CarService,
    public override authService: AuthService
  ) {
    super(authService);
    this.innerHTML = 'Delete';
  }

  ngOnInit(): void {}

  delete() {
    this.carService.delete(this.currentCarFromParent);
  }
}
