import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAliasComponent } from './post-alias.component';

describe('PostAliasComponent', () => {
  let component: PostAliasComponent;
  let fixture: ComponentFixture<PostAliasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostAliasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAliasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
