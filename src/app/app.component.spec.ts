import { AppComponent } from './app.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterModule, RouterOutletMap,ActivatedRoute } from '@angular/router';
import {LocationStrategy} from '@angular/common'
import {RouterTestingModule} from '@angular/router/testing'
describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;


  class MockRouter {

  }
  class MockActivatedRoute
  {

  }
  class MockLocationStrategy{

  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ AppComponent ],
        providers: [ RouterOutletMap],
        imports: [RouterTestingModule]

      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));


  });

  it('should create component', () => expect(comp).toBeDefined());


});