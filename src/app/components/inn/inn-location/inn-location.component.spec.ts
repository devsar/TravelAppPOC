import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnLocationComponent } from './inn-location.component';

describe('InnLocationComponent', () => {
  let component: InnLocationComponent;
  let fixture: ComponentFixture<InnLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnLocationComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
