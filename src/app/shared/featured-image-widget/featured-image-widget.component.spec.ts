import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedImageWidgetComponent } from './featured-image-widget.component';

describe('FeaturedImageWidgetComponent', () => {
  let component: FeaturedImageWidgetComponent;
  let fixture: ComponentFixture<FeaturedImageWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedImageWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedImageWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
