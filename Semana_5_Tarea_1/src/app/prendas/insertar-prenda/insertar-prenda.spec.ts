import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { InsertarPrenda } from './insertar-prenda';

describe('InsertarPrenda', () => {
  let component: InsertarPrenda;
  let fixture: ComponentFixture<InsertarPrenda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertarPrenda],
      providers: [provideRouter([]), provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(InsertarPrenda);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
