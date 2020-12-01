import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludoRefComponent } from './saludo-ref.component';

describe('SaludoRefComponent', () => {
  let component: SaludoRefComponent;
  let fixture: ComponentFixture<SaludoRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaludoRefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaludoRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
