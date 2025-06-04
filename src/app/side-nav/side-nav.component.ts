import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
constructor(private auth: AuthService, private router: Router) {}

  logout() {
    this.auth.logout();
  }

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }


  settingsOpen = false;
isExpanded = false;        
toggleSettings() {
  this.settingsOpen = !this.settingsOpen;
}

}
