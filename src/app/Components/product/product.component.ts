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
  public flag:boolean;
  constructor(private service:AjaxService) {
    this.flag=false;
   }

  ngOnInit() {
    if(!this.jokes){
    var Sub = this.service.loadJokes().subscribe((data)=>{
      this.jokes=data["value"];
      this.flag=!this.flag;
    },(err)=>{
      console.log("ERR IS",err);
    },()=>{
      Sub.unsubscribe();
    })
  }
}

}
