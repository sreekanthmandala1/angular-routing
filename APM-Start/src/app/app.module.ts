import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './products/product-data';

import { AppComponent } from './app.component';
import {AppRoutingModule} from '../app/app-routing.module'

/* Feature Modules */
import { ProductModule } from './products/product.module';
import { UserModule } from './user/user.module';
import { MessageModule } from './messages/message.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageComponent } from './messages/message.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forChild([
      {path:'messages', component: MessageComponent, outlet: 'popup'}
    ]),
    InMemoryWebApiModule.forRoot(ProductData, { delay: 1000 }),
    ProductModule,
    UserModule,
    MessageModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InMemoryWebApiModule.forRoot(ProductData,{delay: 1000}),
  ],
  declarations: [
    AppComponent,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
