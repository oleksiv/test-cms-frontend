import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryIndexComponent } from './post-index.component';

describe('PostIndexComponent', () => {
  let component: CategoryIndexComponent;
  let fixture: ComponentFixture<CategoryIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
