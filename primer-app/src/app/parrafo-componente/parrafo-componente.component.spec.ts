import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParrafoComponenteComponent } from './parrafo-componente.component';

describe('ParrafoComponenteComponent', () => {
  let component: ParrafoComponenteComponent;
  let fixture: ComponentFixture<ParrafoComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParrafoComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParrafoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
