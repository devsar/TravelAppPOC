import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaCiudadSkeletonComponent } from './tarjeta-ciudad-skeleton.component';

describe('TarjetaCiudadSkeletonComponent', () => {
  let component: TarjetaCiudadSkeletonComponent;
  let fixture: ComponentFixture<TarjetaCiudadSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaCiudadSkeletonComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaCiudadSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
