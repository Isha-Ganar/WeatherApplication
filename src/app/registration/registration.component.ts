import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  jwt: any = {};
  login_payload : FormGroup
  constructor(
    private router: Router,
    private _fb: FormBuilder,
    private commonService: CommonService
  ) {
    this.login_payload = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      passWord: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    
  }

  async regiser_and_login() {
    
    // regiter to get token

    const payload = this.login_payload.value;
    const jwt_res: any = await this.commonService
      .jwt_register(payload)
      .toPromise();
    // err handling here to be done
    
    // auth service to login passing token
    const auth_res = await this.commonService.auth(payload).toPromise();
    const res2json = JSON.parse(auth_res);
    localStorage.setItem('jwt_token', res2json.jwtToken);
    // err handling tbd
    if(res2json.jwtToken){
      this.router.navigate(['/user']);
    }
  }
}
