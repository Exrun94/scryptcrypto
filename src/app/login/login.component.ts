import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn!: boolean;

  constructor(
    private authService: AuthService,
    private cookie: CookieService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.authService.emitStatus().subscribe((isLogged: boolean) => {
      console.log(isLogged)
    })
  }

  onSubmit(formData: NgForm) {
    const username = formData.value.username;
    const password = formData.value.password;
    //console.log(username, password)
    this.authService.login(username, password).subscribe((res) => {
      console.log(res)
      this.isLoggedIn = true
      localStorage.setItem('token', res.token)
      localStorage.setItem('user', res.user)

      this.cookie.put('aid', res.token)
      this.cookie.put('user', res.user)
      this.router.navigate(['/'])
    })
  }

}
