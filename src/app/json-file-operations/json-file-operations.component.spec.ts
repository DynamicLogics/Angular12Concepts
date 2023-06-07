import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JSONFileOperationsComponent } from './json-file-operations.component';

describe('JSONFileOperationsComponent', () => {
  let component: JSONFileOperationsComponent;
  let fixture: ComponentFixture<JSONFileOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JSONFileOperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JSONFileOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
