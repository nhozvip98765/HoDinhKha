import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardLoginAdminGuard } from '../guard_routing/guard-login-admin.guard';
import { RegisterAccountComponent } from '../manage_login/register-account/register-account.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ChartsAdminComponent } from './pages/charts-admin/charts-admin.component';
import { ChatsCustomerComponent } from './pages/chats-customer/chats-customer.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { LayoutAdminComponent } from './pages/layout-admin/layout-admin.component';
import { ManageProductComponent } from './pages/manage-product/manage-product.component';
import { OrderCustomerComponent } from './pages/order-customer/order-customer.component';

const routes: Routes = [
    {
        path:"admins",
        component:LayoutAdminComponent,
        canActivateChild:[GuardLoginAdminGuard],
        children:[
            {
                path:"",
                redirectTo:"manage_product",
                pathMatch:"full" 
            },
            {
                path:"manage_product",
                component:ManageProductComponent,
            },
            {
                path:"add_product",
                component:AddProductComponent,
            },
            {
                path:"chats_customer",
                component:ChatsCustomerComponent
            },
            {
                path:"charts_admin",
                component:ChartsAdminComponent
            },
            {
                path:"order_cutomer",
                component:OrderCustomerComponent
            },
            {
                path:"edit_product/:id",
                component:EditProductComponent
            },
            {
                path:"register",
                component:RegisterAccountComponent
            }
            
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
