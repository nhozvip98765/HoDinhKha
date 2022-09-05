import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { accountAdmin } from 'src/app/models/account_admin.model';
import { ApiAccountAdminService } from 'src/app/services/api-account-admin.service';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.scss']
})
export class RegisterAccountComponent implements OnInit {

  constructor(private addAccount:ApiAccountAdminService, private router:Router) { }
  accountManage:accountAdmin=new accountAdmin();

  listAccountRegister:[]|any;
  ngOnInit(): void { 
    this.loadAccount();
  }


  loadAccount(){
    this.addAccount.getAllAccount().subscribe(data=>{
      this.listAccountRegister=data;
    })
  }

  
  onRegister(x:accountAdmin){
    this.listAccountRegister.forEach((element: any) => {
      if(x.adminName==element.adminName && x.passwordAdmin==element.passwordAdmin){
        alert("Tài khoảng này đã tồn tại rồi !");
      }
     else{
        this.addAccount.addAccount(x).subscribe(data=>{});
     }
    });
  }


  xoa(id:number){
    if(confirm("Bạn có muốn xóa Account này không ?")){
      this.addAccount.deleteAccount(id).subscribe(data=>{
        this.addAccount.listAccount=data;
      });
      location.reload();
    }
  }
}
