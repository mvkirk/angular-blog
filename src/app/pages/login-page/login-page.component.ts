import { Router } from '@angular/router';
import { UserService } from './../../shared/user.service';
import { AuthService } from './../../shared/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  /**
   * Sign in the user with the email and password from the loginForm.
   * If signin success load the user and redirect to the posts list.
   */
  login() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.authService.login(email, password)
      .subscribe(
          results => {
          // success callback
          // load connected user profile and redirect to the list of posts
          this.userService.loadUser().subscribe(result => {
            this.router.navigateByUrl('/');
          })
        },
        error => {
          // error callback
          // display error messages
        }
      );
  }
}
