import {Router} from '@angular/router'
import {Component, OnInit} from "@angular/core";
import{ Details } from '../app.details' ;
import {DetailService} from "../app.detailsService";

@Component({
  moduleId :module.id ,
  selector: 'showTask',
  templateUrl:'./showTask.html',
})
export  class  ShowTaskComponent implements OnInit {

  todo: Details[];

    index : number

  constructor(private  service: DetailService, private  router:Router) {
    this.todo = this.service.todos;

  }

  ngOnInit() {

    this.service.getData().subscribe((data:any)=>{

        this.service.todos=data;
        this.todo = this.service.todos;
      } ,
      err => {alert(JSON.stringify(err)) } ,


    );

  }

  delete(index:string){

    this.service.deleteData(index).subscribe((data:any)=>{alert("data has been deleted")})
  }
  edit(index:number){

    this.router.navigate(['submitTask',index])
  }
}



