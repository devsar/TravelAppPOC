import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnPage } from './inn.page';

describe('InnComponent', () => {
  let component: InnPage;
  let fixture: ComponentFixture<InnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
