import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/models/product.model';
import { APIProductService } from 'src/app/services/api-product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  proDetail:{}|any;
  constructor(private router:ActivatedRoute,private httpClient:APIProductService) { }
 
  ngOnInit(): void {
    this.productDetail();
  }

  productDetail(){
    this.router.params.subscribe(data=>{
      this.httpClient.getProductDetail(data['id']).subscribe(data=>{
        this.proDetail=data;
      })
    })
  }

}
