import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-log',
  standalone: true,
  imports: [RouterLink,SignupComponent,CommonModule,ReactiveFormsModule,FormsModule,HttpClientModule],
  templateUrl: './log.component.html',
  styleUrl: './log.component.css'
})
export class LogComponent {
  errMsg:any;
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient,private router:Router) {}

  login() {
    this.http.post('https://developers-back.onrender.com/login', { email: this.email, password: this.password })
      .subscribe((response: any) => {
        console.log(response.message);
        this.router.navigate(['/home']);
        // Handle successful login
      }, (error) => {
        console.error(error.error.message);
        // Handle login error
        this.errMsg='Wrong Credientials';
      })
  
}
}
