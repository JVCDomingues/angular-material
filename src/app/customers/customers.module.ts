import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list'; 
import { MatDialogModule, MatRadioModule, MatSnackBarModule } from '@angular/material';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CustomerNewComponent } from './customer-new/customer-new.component';
import { RepDialogComponent } from './rep-dialog/rep-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule,
    MatDividerModule,
    MatGridListModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    CustomersRoutingModule
  ],
  declarations: [CustomersListComponent, CustomerCardComponent, CustomerNewComponent, RepDialogComponent],
  entryComponents: [RepDialogComponent]
})
export class CustomersModule { }
