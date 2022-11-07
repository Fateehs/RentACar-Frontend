import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/models/entitymodels/user-dto';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-account-options',
  templateUrl: './account-options.component.html',
  styleUrls: ['./account-options.component.css'],
})
export class AccountOptionsComponent implements OnInit {
  currentUserDTO: UserDTO;
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    if (this.loggedIn()) {
      this.getCurrentUserDTO();
    }
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  getCurrentUserDTO() {
    this.userService.getCurrentUserDTO().subscribe((response) => {
      this.currentUserDTO = response.data;
    });
  }
}
