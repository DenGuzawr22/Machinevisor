import { Injectable } from '@angular/core';
import { NavigationService } from '../navigationService/navigation.service';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

export interface Login{
  headers: string,
  status: number,
  statusText:string,
  url: string,
  ok: boolean,
  type: number,
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private navService: NavigationService, private http: HttpClient) { }

  private statusOk = 200;

  public getToken(){
    return localStorage.getItem('token');
  }

  public setToken(token: string){
    localStorage.setItem('token', token);
  }

  public getStatusOk(){
    return this.statusOk;
  }

  public logout() {
    this.navService.goToPage('/login');

   localStorage.removeItem('token')
  }

  public isTokenStored(){
    return this.getToken() !== null;
  }

  public signInUser(email: string, password: string){    
    const data = {
      "email": email,
      "password": password
    };

    console.log(data)

    const url = environment.apiUrl + "auth/sign_in";
    return this.http.post<Login>(url, data, { observe: 'response' });
  }
}
