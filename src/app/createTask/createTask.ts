import {Component, OnInit} from "@angular/core";

import{ Details } from '../app.details'
import {DetailService} from "../app.detailsService";
import error = webdriver.error;
import * as webdriver from "selenium-webdriver";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  moduleId :module.id ,
  selector: 'createTask',
  templateUrl:'./createTask.html'
})
export  class  CreateTaskComponent implements OnInit {

  todo:any[];
  todoObj : any;
  dates : Date =  null
  index:string
  //task:any;

  fill : string = ''

  constructor (private  service :  DetailService, private  router:Router,private route: ActivatedRoute){

   this.todo=this.service.todos;



  }
  ngOnInit(){
    this.todo=this.service.todos;
    this.route.params.subscribe((data: any) => {

      this.index = data.id;

      if(this.index){
        console.log(JSON.stringify(this.todo));

      }
    });


  }



  submit(dt: String, title: String, discipition: String, priority: String) {

    this.service.submitData(dt,title,discipition,priority).subscribe((data:any)=>{alert("updated")})

    this.fill = ' '

  }
}

