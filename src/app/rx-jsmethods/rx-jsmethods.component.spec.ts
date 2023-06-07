import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJSMethodsComponent } from './rx-jsmethods.component';

describe('RxJSMethodsComponent', () => {
  let component: RxJSMethodsComponent;
  let fixture: ComponentFixture<RxJSMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxJSMethodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxJSMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
