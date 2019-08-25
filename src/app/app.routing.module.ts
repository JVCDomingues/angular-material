import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { SigninComponent } from './home/signin/signin.component';

const routes: Routes = [
    {
        path: 'customers',
        loadChildren: './customers/customers.module#CustomersModule'
    },
    {
        path: 'messages',
        loadChildren: './messages/messages.module#MessagesModule'   
    },
    {
        path: 'orders',
        loadChildren: './orders/orders.module#OrdersModule'
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: './home/home.module#HomeModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}