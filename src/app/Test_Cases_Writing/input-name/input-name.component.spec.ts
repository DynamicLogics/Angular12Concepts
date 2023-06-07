import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNameComponent } from './input-name.component';
import { ConstantDataService } from 'src/app/constant-data.service';

describe('InputNameComponent', () => {
  let component: InputNameComponent;
  let fixture: ComponentFixture<InputNameComponent>;

  //declaration of the service component
  let serviceComponent: ConstantDataService;
  //let serivceFixture: ComponentFixture<ConstantDataService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputNameComponent ],
      /*
        you need to pass the service class into the providers array for importing 
        thats how angular will know that it is a service class and not any  component, pipe, or directive.
      */
      providers: [ ConstantDataService ]
    })
    .compileComponents();

    //here Iam doing the dependency injection of the ConstantDataService
    serviceComponent = TestBed.inject(ConstantDataService);

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputNameComponent);
    component = fixture.componentInstance;
    //Here the 'detectChanges()' method triggers change detection for a test fixture
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(serviceComponent).toBeTruthy();
  });

  it('check if user name is present or not', () => {
      /*  
        here the 'component' is the object from which I'am accepting the name 
        variable that I have declared inside my 'InputNameComponent' component 
      */
      component.name = 'Shubham from Pune';
      //Here the 'detectChanges()' method triggers change detection for a test fixture
      fixture.detectChanges();
      /*
        fixture.nativeElement is a property of the ComponentFixture object that provides 
        access to the DOM element of the component being tested.
      */
      const compiledElement = fixture.nativeElement;
      /*
        expect() is a function that is used to define an assertion in your test case
        here, I'am passing ID #my-id for the specific DOM element on which I wanted to conduct 
        my test
      */
      expect(compiledElement.querySelector('#my-id').textContent).toContain('my name is Shubham from Pune');
  });

  //here, I'am testing the service component that I have inject inside this test case file
  it('Getting Array Values from the ConstantDataService component', () => {
    const arrayElement = serviceComponent.getCountryNames()[0];
    expect(arrayElement).toEqual("America");
  });

});
