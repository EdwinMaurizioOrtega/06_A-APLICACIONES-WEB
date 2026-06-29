import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editarprenda',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './editarprenda.html',
  styleUrl: './editarprenda.css',
})
export class Editarprenda implements OnInit {
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

  ngOnInit(): void {
    // Cargar datos demo - en producción vendría de la API
    const demoData = {
      codigo: 'PRE-001',
      nombre: 'Vestido Floral Verano',
      categoria: 'Vestidos',
      talla: 'M',
      color: 'Estampado',
      material: 'Algodón Orgánico',
      precio: 45.00,
      estado: 'Disponible',
      descripcion: 'Vestido ligero con estampado floral',
      ubicacion: 'Cuenca - Centro',
      vendedor: 'María Torres'
    };
    this.frmPrenda.patchValue(demoData);
  }

  actualizar() {
    if (this.frmPrenda.invalid) return;
    alert('✅ Prenda actualizada correctamente (demo data)');
    this.rutas.navigate(['/prendas']);
  }
}
