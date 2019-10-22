import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnHostComponent } from './inn-host.component';

describe('InnHostComponent', () => {
  let component: InnHostComponent;
  let fixture: ComponentFixture<InnHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnHostComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
