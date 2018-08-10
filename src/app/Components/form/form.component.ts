import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormArray } from '@angular/forms';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css','../../../../node_modules/font-awesome/css/font-awesome.min.css']
})
export class FormComponent implements OnInit {
  frm:FormGroup
  constructor() { 

  }
  submitForm(){
    console.log(this.frm.value);
  }

  ngOnInit() {
    this.frm = new FormGroup({
      'fname': new FormControl(null,[Validators.required,Validators.pattern("^[a-zA-Z]{3,15}$"),Validators.minLength(3),Validators.maxLength(15)]),
      'lname': new FormControl(null,[Validators.required,Validators.pattern("^[a-zA-Z]{3,15}$"),Validators.minLength(3),Validators.maxLength(15)]),
      'email': new FormControl(null,[Validators.required,Validators.email,Validators.pattern("^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$")]),
      'mobile': new FormControl(null,[Validators.required,Validators.pattern("^[0-9]{10}$")]),
      'hobbies': new FormArray([])
    })
  }

  addHobby(){
    var hobby = new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]{3,50}$")]);
    (<FormArray>this.frm.get('hobbies')).push(hobby);
  }

  removeHobby(item,cont){
    console.log(cont);
    (<FormArray>this.frm.get('hobbies')).removeAt(item);
  }
}
