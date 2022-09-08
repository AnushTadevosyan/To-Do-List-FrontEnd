import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginUserDTO } from 'dto/LoginUserDTO';
import { Observable } from 'rxjs';
import { ILoginUserResponse, IRegisterUserResponse } from 'interface/IUser';
import { RegisterUserDTO } from 'dto/RegisterUserDTO';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  _url_get_All_Users = 'http://localhost:8080/todolist/getAllUsers';
  _url_register_user = 'http://localhost:8080/todolist/registerNewUser';
  _url_login_user = 'http://localhost:8080/todolist/login';

  constructor(private _http: HttpClient) {}

  loginUser(user: LoginUserDTO): Observable<ILoginUserResponse> {

    return this._http.post<ILoginUserResponse>(this._url_login_user, user);

  }

  registerUser(user: RegisterUserDTO): Observable<IRegisterUserResponse>{
    return this._http.post<IRegisterUserResponse>(this._url_register_user, user);
  }


}
