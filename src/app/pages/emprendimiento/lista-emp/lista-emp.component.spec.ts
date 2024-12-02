import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEmpComponent } from './lista-emp.component';

describe('ListaEmpComponent', () => {
  let component: ListaEmpComponent;
  let fixture: ComponentFixture<ListaEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaEmpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
