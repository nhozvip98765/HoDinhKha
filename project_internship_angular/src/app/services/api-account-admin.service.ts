import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { accountAdmin } from '../models/account_admin.model';

@Injectable({
  providedIn: 'root'
})
export class ApiAccountAdminService {

  constructor(private httpClient:HttpClient) { }
  API_ACCOUNT:string="http://localhost:3000/account";

  listAccount:[]|any;
  curentAccount:accountAdmin|any;


  getAllAccount(){
    return this.httpClient.get<any>(`${this.API_ACCOUNT}`);
  }

  addAccount(data:any){
    return this.httpClient.post(`${this.API_ACCOUNT}`,data);
  }

  deleteAccount(id:number){
    return this.httpClient.delete(`${this.API_ACCOUNT}/${id}`);
  }

  checkAccountAdmin(account:accountAdmin){
    return new Promise ((res,rej)=>{
      try {
        this.listAccount.forEach((element: { adminName: string, passwordAdmin:string; }) => {
          if(account.adminName==element.adminName && account.passwordAdmin==element.passwordAdmin){
            sessionStorage.setItem("curentAccount",JSON.stringify(account));
            res(account);
          }
        });
      } catch (error) {
        rej(error);
      }
    })
  }


  checkAccountAdminGuard(){
    try {
        let strcurentAccount=sessionStorage.getItem("curentAccount");
        if(strcurentAccount && strcurentAccount.length>0){
          this.curentAccount=JSON.parse(strcurentAccount);
          return true;
        }
      }
    catch (error) {
        console.log(error);
      }
    return false;
  }
  

}
