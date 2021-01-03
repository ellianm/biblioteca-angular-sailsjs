import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { PasswordModule } from 'primeng/password';

import { CoreModule } from 'src/app/core/core.module';
import { InputTextModule } from 'primeng/inputtext/';
import { RegisterComponent } from './register.component';


@NgModule({
    declarations: [
        RegisterComponent
    ],
    exports: [
        RegisterComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        InputTextModule,
        CardModule,
        ButtonModule,
        MessageModule,
        FormsModule,
        PasswordModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: []
})
export class RegisterModule { }
