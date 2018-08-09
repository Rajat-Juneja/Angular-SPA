import { Component, OnInit } from '@angular/core';
import { AjaxService } from './../../Services/ajax.service';
import { Joke } from './../../Models/jokes';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  jokes:Joke[];
  constructor(private service:AjaxService) {

   }

  ngOnInit() {
    var Sub = this.service.loadJokes().subscribe((data)=>{
      console.log("JOKE IS",data);
      this.jokes=data.value;
    },(err)=>{
      console.log("ERR IS",err);
    },()=>{
      console.log("Complete");
      Sub.unsubscribe();
    })
  }

}
