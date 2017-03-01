import {ShowTaskComponent} from "./showTask";
import {RouterOutletMap, Router, NavigationExtras} from "@angular/router";
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
describe('ShowComponent', function () {
  let de: DebugElement;
  let comp: ShowTaskComponent;
  let fixture: ComponentFixture<ShowTaskComponent>;
  let service: DetailService;
  let router: Router;

  class MockRouter {
   navigate():Promise<boolean>{
     return Promise.resolve(true)
   }
  }


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowTaskComponent],
      providers: [{provide: Router, useClass: MockRouter}, RouterOutletMap, DetailService],
      imports: [RouterTestingModule, CommonModule, FormsModule, HttpModule]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTaskComponent);
    comp = fixture.componentInstance;
    
    de = fixture.debugElement.query(By.css('h1'));
    service = fixture.debugElement.injector.get(DetailService);
    router = fixture.debugElement.injector.get(Router);
  });

  it('should create show component', () => expect(comp).toBeDefined());
  it('it should get data from service', () => {
    spyOn(service, 'getData').and.returnValue(
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
    comp.ngOnInit();
    expect(comp.todo).toEqual([{
      date: '',
      title: '',
      description: '',
      priority: '',
      _id: ''
    }])
  });

  it('it should delete data from service',() =>{
    spyOn(window, "alert");
    spyOn(service,'deleteData').and.returnValue(
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
    comp.delete("0");
    expect(window.alert).toHaveBeenCalledWith('data has been deleted');
    router.navigate([]).then(data => {
      expect(data).toBe(true);
    })

  });
});
