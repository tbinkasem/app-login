import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LoginServiceProvider Provider');
  }

  login(username, password){
    let url = "http://localhost/ionic/login.php";
    let formLogin = new FormData();
    formLogin.append('username', username);
    formLogin.append('password', password);

    let response = this.http.post(url, formLogin);
    return response;
  }

}
