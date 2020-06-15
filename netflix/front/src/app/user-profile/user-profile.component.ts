import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NewProfileService } from '../new-profile/service/new-profile.service';
import Profile from '../new-profile/model/new-profile.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  UserProfile;
  info = <any>[];

  constructor(private newProfileService: NewProfileService, private router: Router) { }
  ngOnInit() {
    this.newProfileService.getPerfil().subscribe(
      (res) => {
        this.UserProfile = res['user'];
      },
      (err) => {
        console.log(err);
      });
  }
}
