import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishWidgetComponent } from './publish-widget.component';

describe('PublishWidgetComponent', () => {
  let component: PublishWidgetComponent;
  let fixture: ComponentFixture<PublishWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
