import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  ngOnInit() {
    
    console.log('Dashboard initialized with users:', this.users);

  }
  constructor(private router: Router) { }
  users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
    { id: 2, name: 'Alice Smith', email: 'alice.smith@example.com', role: 'User' },
    { id: 3, name: 'Michael Brown', email: 'michael.brown@example.com', role: 'Editor' },
    { id: 4, name: 'Emma Wilson', email: 'emma.wilson@example.com', role: 'Viewer' }
  ];




  logout() {
    localStorage.removeItem('token'); // dummy logout
    this.router.navigate(['/login']);
  }
}
