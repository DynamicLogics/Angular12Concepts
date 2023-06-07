import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyinjectionExampleComponent } from './dependencyinjection-example.component';

describe('DependencyinjectionExampleComponent', () => {
  let component: DependencyinjectionExampleComponent;
  let fixture: ComponentFixture<DependencyinjectionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependencyinjectionExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DependencyinjectionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
