import {Component, OnInit} from "@angular/core";

import{ Details } from '../app.details'
import {DetailService} from "../app.detailsService";
import error = webdriver.error;
import * as webdriver from "selenium-webdriver";
import {Router, ActivatedRoute} from "@angular/router";

@Component({

  moduleId :module.id ,
  selector: 'submit-task',
  templateUrl:'./submitTask.html'

})
export  class  SubmitTaskComponent implements OnInit {

  todo:any[];
  todoObj : any;
  dates : Date =  null
  index:string
  task:any;

  fill : string = ''

  constructor (private  service :  DetailService, private  router:Router,private route: ActivatedRoute){

    this.todo=this.service.todos;



  }
  ngOnInit(){
    this.todo=this.service.todos;
    this.route.params.subscribe((data: any) => {

      this.index = data.id;

      if(this.index){
        //console.log(JSON.stringify(this.todo));

        this.task=this.todo.filter(x=>x._id==this.index)[0];


      }
    });


  }



  submit(dt: String, title: String, disc: String, priority: String,id:string) {

    this.service.updateData(dt,title,disc,priority,id).subscribe((data:any)=>{alert("data updated")})
    this.task='';



  }
}

