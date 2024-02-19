import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfidDataComponent } from './rfid-data.component';

describe('RfidDataComponent', () => {
  let component: RfidDataComponent;
  let fixture: ComponentFixture<RfidDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RfidDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RfidDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
