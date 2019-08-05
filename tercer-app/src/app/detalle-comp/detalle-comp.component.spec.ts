import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCompComponent } from './detalle-comp.component';

describe('DetalleCompComponent', () => {
  let component: DetalleCompComponent;
  let fixture: ComponentFixture<DetalleCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
