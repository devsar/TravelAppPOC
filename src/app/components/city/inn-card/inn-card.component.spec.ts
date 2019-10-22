import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnCardComponent } from './inn-card.component';

describe('InnCardComponent', () => {
  let component: InnCardComponent;
  let fixture: ComponentFixture<InnCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnCardComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
