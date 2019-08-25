import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CustomerNewComponent } from './customer-new/customer-new.component';

const routes: Routes = [
    {
      path: '',
      component: CustomersListComponent
    },
    {
      path: 'info',
      component: CustomerCardComponent
    },
    {
      path: 'new',
      component: CustomerNewComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
