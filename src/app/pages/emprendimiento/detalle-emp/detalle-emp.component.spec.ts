import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEmpComponent } from './detalle-emp.component';

describe('DetalleEmpComponent', () => {
  let component: DetalleEmpComponent;
  let fixture: ComponentFixture<DetalleEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleEmpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
