import {CreateTaskComponent} from "./createTask";
import {RouterOutletMap, Router, NavigationExtras,ActivatedRoute} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {async, TestBed, ComponentFixture} from "@angular/core/testing";
import {By}           from '@angular/platform-browser';
import {DebugElement} from "@angular/core";
import {DetailService} from "../app.detailsService";
import {HttpModule} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
describe('Createcomponent', function () {
  let de: DebugElement;
  let comp: CreateTaskComponent;
  let fixture: ComponentFixture<CreateTaskComponent>;
  let service: DetailService;
  let router: Router;

  class MockRouter {
   navigate():Promise<boolean>{
     return Promise.resolve(true)
   }
  }
class MockActivatedRoute{
  
}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTaskComponent],
      providers: [{provide: Router, useClass: MockRouter},{provide : ActivatedRoute, useClass: MockActivatedRoute}, DetailService],
      imports: [RouterTestingModule, CommonModule, FormsModule, HttpModule]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTaskComponent);
    comp = fixture.componentInstance;
    
    de = fixture.debugElement.query(By.css('h1'));
    service = fixture.debugElement.injector.get(DetailService);
    router = fixture.debugElement.injector.get(Router);
  });

  it('it should create component', () => expect(comp).toBeDefined());
 



  it('it should insert new data to service',() =>{
    spyOn(window, "alert");

    spyOn(service,'submitData').and.returnValue(
      Observable.of<any>(
        [{
          date: '',
          title: '',
          description: '',
          priority: '',
          _id: ''
        }]
      )
    );
    comp.submit("","","","");
    expect(window.alert).toHaveBeenCalledWith('updated');
    router.navigate([]).then(data => {
      expect(data).toBe(true);
    })

  });
});
