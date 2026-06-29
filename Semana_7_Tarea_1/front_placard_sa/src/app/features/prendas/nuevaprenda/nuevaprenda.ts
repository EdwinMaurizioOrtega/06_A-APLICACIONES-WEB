import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nuevaprenda',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './nuevaprenda.html',
  styleUrl: './nuevaprenda.css',
})
export class Nuevaprenda {
  frmPrenda: FormGroup;
  private readonly fb = inject(FormBuilder);
  private readonly rutas = inject(Router);

  constructor() {
    this.frmPrenda = this.fb.group({
      codigo: new FormControl('', [Validators.required]),
      nombre: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      talla: new FormControl('', Validators.required),
      color: new FormControl('', Validators.required),
      material: new FormControl('', Validators.required),
      precio: new FormControl('', [Validators.required, Validators.min(0.01)]),
      estado: new FormControl('Disponible', Validators.required),
      descripcion: new FormControl(''),
      ubicacion: new FormControl('', Validators.required),
      vendedor: new FormControl('', Validators.required),
    });
  }

  grabar() {
    if (this.frmPrenda.invalid) return;
    alert('✅ Prenda guardada correctamente (demo data)');
    this.rutas.navigate(['/prendas']);
  }
}
