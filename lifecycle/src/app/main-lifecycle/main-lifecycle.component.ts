import { Client } from './../cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-lifecycle',
  templateUrl: './main-lifecycle.component.html',
  styleUrls: ['./main-lifecycle.component.css']
})
export class MainLifecycleComponent implements OnInit {
  foods: string[] = ["Rice", "Beans", "Pizza"];
  clients: Client [] = [];
  name="";
  age=0;
  food="";
  editClient: Client = null;


  constructor() { }

  ngOnInit() {
  }

  save(){
    if(this.editClient==null){
      this.clients.push({name: this.name, age: this.age, food: this.food})
    }
    this.age = null;
    this.name="";
    this.name="";
  }





}
