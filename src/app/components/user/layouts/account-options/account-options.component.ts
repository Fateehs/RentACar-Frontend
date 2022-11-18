import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/models/entity-models/dto/user-dto';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';


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
