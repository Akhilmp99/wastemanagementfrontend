import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  user={email :'',
        password :''
      }

  
  constructor(private _auth:AuthService) { }

  ngOnInit(): void {
  }

  loginUser()
  {
    this._auth.loginUser;
  }
}
