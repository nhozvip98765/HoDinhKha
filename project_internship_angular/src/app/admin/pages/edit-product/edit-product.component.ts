import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/app/models/product.model';
import { APIProductService } from 'src/app/services/api-product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  constructor(private active:ActivatedRoute,private editProduct:APIProductService,private router:Router) { }

  ngOnInit(): void {
    this.getProductAPI_ID();
  }
  product_edit:product=new product();
  pro:{}|any;

  getProductAPI_ID(){
    this.active.params.subscribe(data=>{
      this.editProduct.getProductDetail(data['id']).subscribe(product=>{
        this.pro=product;
      });
    });
  }

  putProduct_API(x:NgForm){
    if(x.invalid){
      alert("Bạn cần nhập đầy đủ thông tin !");
    }
    else{
      this.EditProduct_API();
    }
  }

  EditProduct_API(){
    this.editProduct.editProduct_women(this.pro.id,this.product_edit).subscribe(data=>{
      this.router.navigateByUrl("/admins/manage_product")
    })
  }
}
