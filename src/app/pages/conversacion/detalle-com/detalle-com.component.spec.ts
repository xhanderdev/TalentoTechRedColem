import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleComComponent } from './detalle-com.component';

describe('DetalleComComponent', () => {
  let component: DetalleComComponent;
  let fixture: ComponentFixture<DetalleComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleComComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
