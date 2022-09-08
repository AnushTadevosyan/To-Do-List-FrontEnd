import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterUserDTO } from 'dto/RegisterUserDTO';
import { filter } from 'rxjs';
import { UsersService } from 'services/users.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 
  constructor(private _user_service: UsersService) { }

  registerUserForm = new FormGroup({
    firstName: new FormControl('', [Validators.required,Validators.minLength(2),Validators.maxLength(20)]),
      middleName: new FormControl('', [Validators.required,Validators.minLength(0),Validators.maxLength(20)]),
      lastName: new FormControl('', [Validators.required,Validators.minLength(2),Validators.maxLength(20)]),
      dob: new FormControl('', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      email: new FormControl('',[Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(8),Validators.maxLength(20)]),
  });

  submitFormAndRegisterUser(): void{

    console.log("Submit register clicked");

    let newUser: RegisterUserDTO = new RegisterUserDTO(

      (this.registerUserForm.value.firstName) ? this.registerUserForm.value.firstName : " " ,
      (this.registerUserForm.value.middleName) ? this.registerUserForm.value.middleName : " " ,
      (this.registerUserForm.value.lastName) ? this.registerUserForm.value.lastName : " " ,
      (this.registerUserForm.value.dob) ? this.registerUserForm.value.dob : " " ,
      (this.registerUserForm.value.email) ? this.registerUserForm.value.email : " " ,
      (this.registerUserForm.value.password) ? this.registerUserForm.value.password : " " ,

    );

    this._user_service.registerUser(newUser).pipe(filter (Boolean))
    .subscribe((data) => {
      console.log("register response", data);
      //route to home page
      // this._router.navigate(['employee']);

    });
  }

  ngOnInit(): void {
  }

}


