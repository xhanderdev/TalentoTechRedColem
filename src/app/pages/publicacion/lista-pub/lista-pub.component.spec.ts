import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPubComponent } from './lista-pub.component';

describe('ListaPubComponent', () => {
  let component: ListaPubComponent;
  let fixture: ComponentFixture<ListaPubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaPubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
