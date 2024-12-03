import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEmpComponent } from './crear-emp.component';


describe('CrearEmpComponent', () => {
  let component: CrearEmpComponent;
  let fixture: ComponentFixture<CrearEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearEmpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


