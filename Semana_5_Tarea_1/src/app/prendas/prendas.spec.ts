import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { Prendas } from './prendas';

describe('Prendas', () => {
  let component: Prendas;
  let fixture: ComponentFixture<Prendas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prendas],
      providers: [provideRouter([]), provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(Prendas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
