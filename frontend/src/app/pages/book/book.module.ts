import { TableModule } from 'primeng/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';

import { CoreModule } from 'src/app/core/core.module';
import { AddBookComponent } from './add-book/add-book.component';
import { InputTextModule } from 'primeng/inputtext/';
import { MyComponent } from './my/my.component';


@NgModule({
    declarations: [
        AddBookComponent,
        MyComponent
    ],
    exports: [
        AddBookComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        InputTextModule,
        CardModule,
        ButtonModule,
        MessageModule,
        FormsModule,
        TableModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: []
})
export class BookModule { }
