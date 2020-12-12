import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn!: boolean;
  user!: string | null;

  constructor(private authService: AuthService, private cookie: CookieService, private router: Router) {

    this.authService.getStatus().subscribe(status => {
      this.isLoggedIn = status;
    })
  }


  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.isLoggedIn = true
      this.user = localStorage.getItem('user')
    }

  }

  onLogout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    this.isLoggedIn = false
    this.router.navigate([''])
  }

}
