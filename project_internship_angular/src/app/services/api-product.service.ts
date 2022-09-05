import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class APIProductService {

  constructor(private httpClient:HttpClient) { }
  API_URL_women:string="http://localhost:3000/product_women";

  getAllProduct_women(){
    return this.httpClient.get<any>(`${this.API_URL_women}`);
  }

  addProduct_women(data:any){
    return this.httpClient.post(`${this.API_URL_women}`,data);
  }

  getProductDetail(id:number){
    return this.httpClient.get(`${this.API_URL_women}/${id}`);
  }

  deleteProduct_women(id:number){
    return this.httpClient.delete(`${this.API_URL_women}/${id}`);
  }

  editProduct_women(id:number,data:any){
    return this.httpClient.put(`${this.API_URL_women}/${id}`,data); 
  }

}
