import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CarouselModule } from 'primeng/carousel';
import { ToggleButtonModule } from 'primeng/togglebutton';

import { HomeComponent } from './home.component';
import { NewBooksCarouselComponent } from './new-books-carousel/new-books-carousel.component';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        HomeComponent,
        NewBooksCarouselComponent
    ],
    exports: [
        HomeComponent,
        NewBooksCarouselComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MenubarModule,
        ButtonModule,
        CoreModule,
        InputTextModule,
        TableModule,
        CarouselModule,
        ToggleButtonModule
    ],
    providers: [],
    bootstrap: []
})
export class HomeModule { }
