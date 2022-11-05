import { Component, Input, OnInit } from '@angular/core';
import { Payment } from 'src/app/models/entitymodels/payment';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { UserChildComponentBaseComponent } from '../../../bases/user-child-component-base/user-child-component-base.component';

@Component({
  selector: 'app-delete-payment',
  templateUrl: './delete-payment.component.html',
  styleUrls: ['./delete-payment.component.css'],
})
export class DeletePaymentComponent
  extends UserChildComponentBaseComponent
  implements OnInit
{
  @Input() currentPaymentFromParent: Payment;

  constructor(
    private paymentService: PaymentService,
    public override authService: AuthService
  ) {
    super(authService);
    this.innerHTML = 'Delete';
  }

  ngOnInit(): void {}

  delete() {
    this.paymentService.delete(this.currentPaymentFromParent);
  }
}
