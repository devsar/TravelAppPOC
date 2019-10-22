import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadPage } from './ciudad.page';

describe('CiudadPage', () => {
  let component: CiudadPage;
  let fixture: ComponentFixture<CiudadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiudadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiudadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
