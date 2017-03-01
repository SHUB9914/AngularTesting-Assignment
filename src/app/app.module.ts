import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import {CommonModule} from "@angular/common";
import {routes} from './app.routes'
import {RouterModule} from "@angular/router";
import {CreateTaskComponent} from "./createTask/createTask";
import {ShowTaskComponent} from "./showTask/showTask";
import {DetailService} from "./app.detailsService";
import  {HttpModule} from '@angular/http'
import {SubmitTaskComponent} from "./submitTask/submitTask";

@NgModule({
  imports:      [ BrowserModule, FormsModule ,CommonModule,HttpModule,RouterModule.forRoot(routes)],
  declarations: [ AppComponent ,CreateTaskComponent,ShowTaskComponent,SubmitTaskComponent],
   bootstrap:    [AppComponent ],
  providers: [DetailService]
})
export class AppModule { }
