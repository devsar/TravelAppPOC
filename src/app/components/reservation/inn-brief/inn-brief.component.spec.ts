import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnBriefComponent } from './inn-brief.component';

describe('InnBriefComponent', () => {
  let component: InnBriefComponent;
  let fixture: ComponentFixture<InnBriefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnBriefComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
