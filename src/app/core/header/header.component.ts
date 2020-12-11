import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn!: boolean;
  user!: string;

  constructor(private authService: AuthService, private cookie: CookieService) { }

  ngOnInit(): void {
    if (this.cookie.get('aid')) {
      this.isLoggedIn = true
      this.user = this.cookie.get('user')
    }

  }

  onLogout() {
    this.cookie.remove('aid')
    this.isLoggedIn = false
  }

}
