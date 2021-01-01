import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';

import { CoreModule } from 'src/app/core/core.module';
import { LoginComponent } from './login.component';
import { InputTextModule } from 'primeng/inputtext/';


@NgModule({
    declarations: [
        LoginComponent
    ],
    exports: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        InputTextModule,
        CardModule,
        ButtonModule,
        MessageModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: []
})
export class LoginModule { }
