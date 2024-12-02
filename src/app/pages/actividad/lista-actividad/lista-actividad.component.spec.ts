import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaActividadComponent } from './lista-actividad.component';

describe('ListaActividadComponent', () => {
  let component: ListaActividadComponent;
  let fixture: ComponentFixture<ListaActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaActividadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
