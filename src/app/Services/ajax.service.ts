import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Joke } from './../Models/jokes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {
  
  constructor(private caller:HttpClient) {

   }

   loadJokes():Observable<Joke[]>{
     var url='https://api.icndb.com/jokes/random/50';
    return this.caller.get<Joke[]>(url);
   }
}
