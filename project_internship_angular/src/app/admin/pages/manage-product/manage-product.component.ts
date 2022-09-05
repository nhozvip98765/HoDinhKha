import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/models/product.model';
import { APIProductService } from 'src/app/services/api-product.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss']
})
export class ManageProductComponent implements OnInit {

  constructor(private productAPI:APIProductService) { } 

  manageProduct:product=new product();
  arrayProductAPI:[]|any;

  ngOnInit(): void {
    this.loadProductAPI();
  }

  loadProductAPI(){
    this.productAPI.getAllProduct_women().subscribe(data=>{
      this.arrayProductAPI=data;
    })
  }

  deleteProductItemAPI(id:number){
    if(confirm("Bạn có muốn xóa sản phẩm này không ?")){
      this.productAPI.deleteProduct_women(id).subscribe(data=>{
        this.arrayProductAPI=data;
      });
      location.reload();
    }
  }

}
