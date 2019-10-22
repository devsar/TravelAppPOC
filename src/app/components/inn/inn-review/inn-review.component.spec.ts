import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnReviewComponent } from './inn-review.component';

describe('InnReviewComponent', () => {
  let component: InnReviewComponent;
  let fixture: ComponentFixture<InnReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnReviewComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
