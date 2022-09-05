import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { search } from 'src/app/models/searchProduct.model';

import { APIProductService } from 'src/app/services/api-product.service';

@Component({
  selector: 'app-product-women',
  templateUrl: './product-women.component.html',
  styleUrls: ['./product-women.component.scss']
})
export class ProductWomenComponent implements OnInit {

  constructor(private httpClient:APIProductService) { }

  p:number=0;
  i:number=5;

  product_list_women:[]|any;

  @Input() childMessage:string | undefined;

  public searchName = new Subject<string>();

  search:search=new search();

  public fillterName = '';

  ngOnInit(): void {
    this.getData();
  } 

  getData(){ 
    this.httpClient.getAllProduct_women().subscribe(data =>{
      this.product_list_women=data;
    })
  }

  loadRouter(){
    location.replace("/clients/cart");
  }

  filterNameArray() { 
    this.searchName.pipe(
      debounceTime(1000),
      distinctUntilChanged()).subscribe(childMessage => {
        this.search.searchNameProduct = childMessage.trim().toLowerCase();
        console.log(this.search.searchNameProduct);
        if (this.search.searchNameProduct.length > 0) {
            this.product_list_women = this.product_list_women.filter((data: { name: any; }) => data.name.toString().toLowerCase().includes(this.search.searchNameProduct));
        }
        if (this.search.searchNameProduct.length <= 0) { 
          this.getData();
        }
      });
  }

  pageChangeEvent(event:number){
    this.p=event;
  }

}
