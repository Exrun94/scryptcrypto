import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { AuthService } from '../services/auth.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private cookie: CookieService) { }

  ngOnInit(): void {
  }

  onSubmit(formData: NgForm) {
    const username = formData.value.username;
    const password = formData.value.password;
    //console.log(username, password)
    this.authService.register(username, password).subscribe((res) => {
      console.log(res)
      //this.isLoggedIn = true
      this.cookie.put('aid', res.token)
      this.cookie.put('user', res.user)

    })
  }

}
