import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnServicesComponent } from './inn-services.component';

describe('InnServicesComponent', () => {
  let component: InnServicesComponent;
  let fixture: ComponentFixture<InnServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnServicesComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
