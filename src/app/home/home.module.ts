import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { HomeRoutingModule } from './home.routing.module';

@NgModule({
    declarations: [
        SigninComponent
    ],
    imports: [
        HomeRoutingModule,

        //Material
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class HomeModule {}