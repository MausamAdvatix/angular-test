import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  loginFailed = false;

  constructor(private auth: AuthService, private router: Router) { }

  onLogin(): void {
    const isSuccess = this.auth.login(this.username, this.password);
    if (isSuccess) {
      this.router.navigate(['/dashboard']);
    } else {
      this.loginFailed = true;
    }
  }
}
