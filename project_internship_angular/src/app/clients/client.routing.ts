import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from '../chats/pages/chat/chat.component';
import { CartComponent } from './cart/cart.component';
import { IndexsComponent } from './indexs/indexs.component';
import { LayoutclientComponent } from './layoutclient/layoutclient.component';
import { MyinformationComponent } from './myinformation/myinformation.component';
import { OrderComponent } from './order/order.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductMenComponent } from './product-men/product-men.component';
import { ProductWomenComponent } from './product-women/product-women.component';

const routes: Routes = [
    {
        path:"clients",
        component:LayoutclientComponent,
        children:[
            {
                path:"",
                redirectTo:"indexs",
                pathMatch:"full" 
            },
            {
                path:"indexs",
                component:IndexsComponent,
            },
            {
                path:"product_women",
                component:ProductWomenComponent,
            },
            {
                path:"product_men",
                component:ProductMenComponent
            },
            {
                path:"cart",
                component:CartComponent
            },
            {
                path:"order",
                component:OrderComponent
            },
            {
                path:"product_detail",
                component:ProductDetailComponent
            },
            {
                path:"myinformation",
                component:MyinformationComponent
            },
            {
                path:"chat",
                component:ChatComponent
            },
            {
                path:"product_detail/:id",
                component:ProductDetailComponent
            },
            {
                path:"cart/:id",
                component:CartComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
