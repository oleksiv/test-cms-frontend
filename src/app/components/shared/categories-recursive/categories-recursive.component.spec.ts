import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesRecursiveComponent } from './categories-recursive.component';

describe('CategoriesRecursiveComponent', () => {
  let component: CategoriesRecursiveComponent;
  let fixture: ComponentFixture<CategoriesRecursiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesRecursiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesRecursiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
