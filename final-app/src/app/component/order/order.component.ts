import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { OrderModel } from 'src/app/service/model/order.model';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public products : any = [];
  public grandTotal : number=0;
  public totalItem : number = 0;

  public orderForm !: FormGroup;
  public orderObj = new OrderModel();
  constructor(private formBuilder :FormBuilder , private http : HttpClient , private router:Router, private api :ApiService,private cartService : CartService) { }
 
  ngOnInit(): void {
    this.orderForm=this.formBuilder.group({
      fullname:[''],
      mobile:[''],
      email:[''],
      address:[''],
      city:[''],
      state:[''],
      zip:['']
    })
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
      this.totalItem = res.length;
    })
    
  }
  order(){
    this.orderObj.FullName = this.orderForm.value.fullname;
    this.orderObj.Mobile = this.orderForm.value. mobile;
    this.orderObj.Email = this.orderForm.value.email;
    this.orderObj.Address = this.orderForm.value.address;
    this.orderObj.City = this.orderForm.value.city;
    this.orderObj.State = this.orderForm.value.state;
    this.orderObj.Zip = this.orderForm.value.zip;
    this.orderObj.Title = this.cartService.getitle();
    this.orderObj.Grandtotal = this.grandTotal;
    this.orderObj.Quantity = this.totalItem;
   
  this.api.order(this.orderObj).subscribe(res=>{
    
    this.orderForm.reset();
    this.router.navigate(['login']);
  })
  }
 
}
