import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getProduct(){
    return this.http.get<any>("https://localhost:7188/api/Products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  signup(empobj:any){

    return this.http.post<any>("https://localhost:7188/api/Login/signup",empobj)

  }
  login(empobj:any){
    return this.http.post<any>("https://localhost:7188/api/Login/login",empobj)
  }
  order(empobj:any){
    return this.http.post<any>("https://localhost:7188/api/Order",empobj)
  }
}
