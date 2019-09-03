import { Component, OnInit } from '@angular/core';
import { Customers } from '../customers';
import { CustomerService } from '../customer.service';

@Component({
   selector: 'app-customers-list',
   templateUrl: './customers-list.component.html',
   styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

   customers: any[] = [];

   constructor(private customerService: CustomerService) { }

   ngOnInit() {
      this.customerService.getCustomers().subscribe(customer => {
         console.log(customer);
         this.customers = customer;
         console.log(`Customer returned: ${this.customers}`)
      }, err => console.log(err))
   }

}
