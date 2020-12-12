import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { AuthService } from '../services/auth.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLoggedIn!: boolean;


  constructor(
    private authService: AuthService,
    private cookie: CookieService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

  }

  onSubmit(formData: NgForm) {
    const username = formData.value.username;
    const password = formData.value.password;

    this.authService.register(username, password).subscribe((res) => {
      this.isLoggedIn = true

      localStorage.setItem('token', res.token)
      localStorage.setItem('user', res.user)

      this.authService.sendStatus(this.isLoggedIn)

      this.router.navigate(['/'])
    })
  }

}
