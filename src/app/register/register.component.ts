import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../../assets/_helpers/must-match.validator';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isLoggedIn!: boolean;
  registerForm!: FormGroup;
  submitted = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    const email = this.f.email.value;
    const password = this.f.password.value;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    } else {
      this.authService.register(email, password).subscribe((res) => {
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
    this.registerForm.reset();
  }

}
    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

  //   onSubmit1(formData: any) {
  //     const username = formData.value.username;
  //     const password = formData.value.password;

  //     this.authService.register(username, password).subscribe((res) => {
  //       this.isLoggedIn = true

  //       localStorage.setItem('token', res.token)
  //       localStorage.setItem('user', res.user)

  //       this.authService.sendStatus(this.isLoggedIn)

  //       this.router.navigate(['/'])
  //     })
  //   }

  // }
