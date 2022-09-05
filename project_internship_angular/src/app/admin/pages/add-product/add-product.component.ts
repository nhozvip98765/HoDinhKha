import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/app/models/product.model';
import { APIProductService } from 'src/app/services/api-product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor(private addProduct:APIProductService, private router:Router) { }

  product:product=new product();

  ngOnInit(): void {
  }

  addProduct_API(x:product,filleImage:any){
    if(x.name.length>0){
      let formImage= new FormData();
      formImage.append("image",filleImage[0].name);
      formImage.append("name",x.name.valueOf());
      x.image=filleImage[0].name;
      this.addProduct.addProduct_women(x).subscribe(data=>{
        this.router.navigateByUrl('admins/manage_product');
      })
    }
    else{
      alert("Bạn phải hoàn thành FORM !");
    }
  }

}
