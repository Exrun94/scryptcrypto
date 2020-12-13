import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn!: boolean;
  submitted = false;
  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    const email = this.f.email.value;
    const password = this.f.password.value;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    } else {
      this.authService.login(email, password).subscribe((res) => {
        console.log('asd')
        this.isLoggedIn = true
        localStorage.setItem('token', res.token)
        localStorage.setItem('user', res.user)
        this.authService.sendStatus(this.isLoggedIn)
        this.router.navigate(['/'])
      })
    }
  }

  onReset() {
    this.submitted = false;
    this.loginForm.reset();
  }


}
