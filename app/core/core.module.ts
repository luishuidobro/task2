import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcumbsComponent } from './breadcumbs/breadcumbs.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, BreadcumbsComponent, SearchComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BreadcumbsComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent
  ]
})
export class CoreModule { }
