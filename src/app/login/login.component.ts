import { Component, OnInit } from '@angular/core';
import {AuthService} from "../users.service";
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {TokenStorageService} from "../token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  currentUser : any ;
  public loginform: UntypedFormGroup;


  constructor(private authService: AuthService,
              private formBuilder: UntypedFormBuilder,
              private tokenStorage: TokenStorageService,
              private router:Router) {

    this.loginform = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {

  }

  login() {
    this.authService.login(this?.loginform?.get('username')?.value,this?.loginform?.get('password')?.value).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.currentUser = this.tokenStorage.getUser();
        console.log(this.currentUser);
        this.router.navigate(['quizchoice']);

      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

}
