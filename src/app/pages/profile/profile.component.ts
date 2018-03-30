import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/service.index';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User;
  newImage: File;

  constructor(
    public userService: UserService
  ) {
    this.user = this.userService.user;
  }

  ngOnInit() {
  }

  save( user: User ) {
    this.user.name = user.name;
    this.user.lastName = user.lastName;
    this.user.email = user.email;

    this.userService.updateUser( this.user )
        .subscribe();
  }

  selectImage( file: File ) {
    if (!file) {
      this.newImage = null;
      return;
    }

    this.newImage = file;
  }

  updateImage() {
    this.userService.updateImage( this.newImage, this.user._id );
  }

}
