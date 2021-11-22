import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private autoService: AuthService) { }

  ngOnInit(): void {
  }

  loginIn() {
    localStorage.setItem('token', '12345');
    this.router.navigate([this.autoService.intendedUrl]);
  }

}
