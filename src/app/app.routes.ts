import { Routes} from '@angular/router'

import {CreateTaskComponent} from "./createTask/createTask";
import {ShowTaskComponent} from "./showTask/showTask";
import {SubmitTaskComponent} from "./submitTask/submitTask";

export const routes:Routes=[

  {
  path: 'createTask' ,
  component : CreateTaskComponent
  }
,
  {
  path: 'showTask' ,
  component : ShowTaskComponent
  },
  {
  path: 'submitTask/:id' ,
  component : SubmitTaskComponent
  }


  ];
