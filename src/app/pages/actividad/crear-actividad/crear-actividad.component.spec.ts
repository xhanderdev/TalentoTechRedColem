import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearActividadComponent } from './crear-actividad.component';

describe('CrearActividadComponent', () => {
  let component: CrearActividadComponent;
  let fixture: ComponentFixture<CrearActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearActividadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
