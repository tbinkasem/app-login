import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [LoginServiceProvider]
})
export class LoginPage {

  model: Array<any>;
  formLogin: FormGroup;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loginservice: LoginServiceProvider,
              private fb: FormBuilder,
              public alertCtrl: AlertController
              ) {
                this.formLogin = this.fb.group({
                  username: ["", Validators.required],
                  password: ["",Validators.required]
                });
  }

  doLogin(){
    let username = this.formLogin.controls['username'].value;
    let password = this.formLogin.controls['password'].value;

    this.model = null;
    this.loginservice.login(username, password).subscribe(
      data => {

      },
      error=>{
        let alertCtrl = this.alertCtrl.create({
          title: 'ERROR!!',
          message: 'Network Error!!',
          buttons: ['OK']
        });
        alertCtrl.present();
      }
    )
  }

}
