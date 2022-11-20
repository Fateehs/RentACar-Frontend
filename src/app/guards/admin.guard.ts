import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { PermissionError } from '../models/constants/messages';
import { LoginPath } from '../models/constants/paths';
import { AuthService } from '../services/auth.service';
import { RouterService } from '../services/router.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.isAdmin()) {
      return true;
    } else {
      this.toastrService.warning(PermissionError);
      this.router.navigate([LoginPath]);
      return false;
    }
  }
}
