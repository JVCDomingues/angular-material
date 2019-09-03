import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HomeRoutingModule } from './home.routing.module';

@NgModule({
    declarations: [
        SigninComponent
    ],
    imports: [
        HomeRoutingModule,
        ReactiveFormsModule,

        //Material
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule
    ]
})
export class HomeModule {}