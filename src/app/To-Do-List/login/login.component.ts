import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUserDTO } from 'dto/LoginUserDTO';
import { filter } from 'rxjs';
import { UsersService } from 'services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router, private _user_service: UsersService) { }

  loginUserForm = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.minLength(8),Validators.maxLength(20), Validators.email]),
    password: new FormControl('', [Validators.required,Validators.minLength(8),Validators.maxLength(20)])
  });

  ngOnInit(): void {
  }


  submitFormAndLoginUser(): void{

    console.log("clicked")
    let user: LoginUserDTO = new LoginUserDTO(

      (this.loginUserForm.value.email) ? this.loginUserForm.value.email : " " ,
      (this.loginUserForm.value.password) ? this.loginUserForm.value.password : " " ,
    
    );

    this._user_service.loginUser(user).pipe(filter (Boolean))
    .subscribe((data) => {
      console.log("login response", data);
      // this._router.navigate(['employee']);

    });

  }

  //route to user's page

  

}
