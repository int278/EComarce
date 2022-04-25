import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { UserModel } from 'src/app/service/model/user.model';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm !: FormGroup;
  public signupObj = new UserModel();

  constructor(private formBuilder :FormBuilder , private http : HttpClient , private router:Router, private api :ApiService) { }

  ngOnInit(): void {this.signupForm=this.formBuilder.group({
    fullname:[''],
    mobile:[''],
    username:[''],
    password:[''],
    usertype:['']
  })
}
signUp(){
  this.signupObj.FullName = this.signupForm.value.fullname;
  this.signupObj.UserName = this.signupForm.value.username;
  this.signupObj.Password = this.signupForm.value.password;
  this.signupObj.UserType = this.signupForm.value.usertype;
  this.signupObj.Mobile = this.signupForm.value.mobile
this.api.signup(this.signupForm.value)

.subscribe(res=>{
  alert(res.message);
  this.signupForm.reset();
  this.router.navigate(['login']);
})
}

}