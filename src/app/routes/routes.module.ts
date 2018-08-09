import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router';

import { HomeComponent } from './../Components/home/home.component';
import { FormComponent } from './../Components/form/form.component';
import { ProductComponent } from './../Components/product/product.component';


const routes=[
  {
    path:'',
    component:HomeComponent
  },
  {
  path:'products',
  component:ProductComponent
  },
  {
    path:'form',
    component:FormComponent
  }
]



@NgModule({
  imports: [
RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutesModule { }
