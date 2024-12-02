import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestallePubComponent } from './destalle-pub.component';

describe('DestallePubComponent', () => {
  let component: DestallePubComponent;
  let fixture: ComponentFixture<DestallePubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DestallePubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestallePubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
