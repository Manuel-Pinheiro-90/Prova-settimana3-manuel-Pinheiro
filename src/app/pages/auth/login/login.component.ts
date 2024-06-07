import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { iAuthData } from '../../../models/i-auth-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {



  authData:iAuthData = {
    email: '',
    password: ''
  }

  constructor(
    private authSvc:AuthService,
    private router:Router
  ){}



  login(){this.authSvc.login(this.authData)
.subscribe(()=>{this.router.navigate(['/utente'])})

  }

}
