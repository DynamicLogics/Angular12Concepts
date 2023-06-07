import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDirectiveImplmentationComponent } from './custom-directive-implmentation.component';

describe('CustomDirectiveImplmentationComponent', () => {
  let component: CustomDirectiveImplmentationComponent;
  let fixture: ComponentFixture<CustomDirectiveImplmentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDirectiveImplmentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDirectiveImplmentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
