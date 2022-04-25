import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { UserModel } from 'src/app/service/model/user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm !: FormGroup;
  public loginObj = new UserModel();
  constructor(private formBuilder :FormBuilder , private http : HttpClient , private router:Router, private api :ApiService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[""],
      password:[""]
    });

}
login(){
  this.loginObj.UserName = this.loginForm.value.email;
  this.loginObj.Password = this.loginForm.value.password;
  this.api.login(this.loginObj)
  .subscribe(res=>{
    alert(res.message);
    this.loginForm.reset();
    this.router.navigate(['products']);
    localStorage.setItem('token',res.jwtToken);
  },err=>{
    alert("somthing went wrong")
  })
}

}