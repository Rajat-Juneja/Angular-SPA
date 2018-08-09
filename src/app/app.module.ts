import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {RouterModule} from '@angular/router';
import { RoutesModule } from './routes/routes.module';
import { MainComponent } from './Components/Main/main.component';
import { HeaderComponent } from './Components/header/header.component';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './Components/home/home.component';
import { ProductComponent } from './Components/product/product.component';
import { FormComponent } from './Components/form/form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    HomeComponent,
    ProductComponent,
    FormComponent
  ],
  imports: [
    HttpClientModule,
  BrowserModule,
    RoutesModule,
  BrowserAnimationsModule,
  NoopAnimationsModule,
  MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
