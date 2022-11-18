import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/models/entity-models/dto/user-dto';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  currentUserDTO: UserDTO;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getCurrentUserDTO();
  }

  getCurrentUserDTO() {
    this.userService.getCurrentUserDTO().subscribe((response) => {
      this.currentUserDTO = response.data;
    });
  }
}
