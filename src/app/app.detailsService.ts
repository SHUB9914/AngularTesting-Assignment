
import {Injectable} from "@angular/core";
import {Http , Headers} from '@angular/http'
import {Details}  from './app.details' ;

import {Observable} from "rxjs/Observable";

import 'rxjs/add/observable/of' ;
import 'rxjs/add/observable/throw' ;
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map' ;

//import error = webdriver.error;

@Injectable()
export class DetailService{
  constructor(private http : Http){






  }
  todos:Details[]=[]
  getData():Observable<any>{
    //return Observable.of<any>(this.todos)
     //return Promise.resolve<any>(this.todos)
    //return Promise.reject( new Error("this is my error"))
   // return Observable.throw(new Error("this is my error"))
    let jsonheader = new Headers({

      'Content-Type':  'application/json'}
    );

   //return this.http.post('http://localhost:9000/add',obj,{headers:jsonheader})
    return this.http.get('http://localhost:9000/get/all',{headers:jsonheader})
      .map(response=>{
       return this.extractData(response)


      }).catch(e =>{
       return this.handleError(e)}
     );

  }


  submitData(dt: String, title: String, disc: String, priority: String):Observable<any>{

    let jsonheader = new Headers({

      'Content-Type':  'application/json'}
    );
    let obj ={

      date : dt,
      title : title,
      description : disc,
      priority : priority
    };
    //alert(obj)
    return this.http.post('http://localhost:9000/add',obj,{headers:jsonheader})
      .map(response=>{
        return this.extractData(response)


      }).catch(e =>{
        return this.handleError(e)}
      );
    //return this.http.get('http://localhost:9000/get/all',{headers:jsonheader})


  }





  updateData(dt: String, title: String, disc: String, priority: String,id:string):Observable<any>{

    let jsonheader = new Headers({

      'Content-Type':  'application/json'}
    );
    let obj ={

      _id:id,
      date : dt,
      title : title,
      description : disc,
      priority : priority
    };
    //alert(obj)
    return this.http.post('http://localhost:9000/update',obj,{headers:jsonheader})
      .map(response=>{
        return this.extractData(response)


      }).catch(e =>{
        return this.handleError(e)}
      );
    //return this.http.get('http://localhost:9000/get/all',{headers:jsonheader})


  }



  deleteData(id: string):Observable<any>{

    let jsonheader = new Headers({

      'Content-Type':  'application/json'}
    );

    //alert(obj)
    return this.http.get('http://localhost:9000/remove/'+id,{headers:jsonheader})
      .map(response=>{
        return this.extractData(response)


      }).catch(e =>{
        return this.handleError(e)}
      );
    //return this.http.get('http://localhost:9000/get/all',{headers:jsonheader})


  }




  extractData(res:any){
    let body = res.json();
    return body;

  }
  private handleError(error:any){
    let errMsg : string;
    try {
      if (JSON.parse(error._body).message) {
        errMsg = JSON.parse(error._body).message;
      }
      else {
        errMsg = 'Something went Wrong.........'
      }
    }
      catch(e){
        errMsg = 'something went wrong plz try again later'
      }
      return Observable.throw(new Error(errMsg));

    }
  }




