import { Component, inject, OnInit } from '@angular/core';
import { IPrenda } from '../../../core/interfaces/iprenda';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eliminarprenda',
  imports: [CommonModule, RouterLink],
  templateUrl: './eliminarprenda.html',
  styleUrl: './eliminarprenda.css',
})
export class Eliminarprenda implements OnInit {
  prenda: IPrenda | null = null;
  private readonly rutas = inject(Router);

  ngOnInit(): void {
    // Demo data - en producción buscar por ID
    this.prenda = {
      id: 1, codigo: 'PRE-001', nombre: 'Vestido Floral Verano',
      categoria: 'Vestidos', talla: 'M', color: 'Estampado',
      material: 'Algodón Orgánico', precio: 45.00, estado: 'Disponible',
      descripcion: 'Vestido ligero con estampado floral',
      ubicacion: 'Cuenca - Centro', vendedor: 'María Torres'
    };
  }

  eliminar() {
    alert('🗑️ Prenda eliminada correctamente (demo data)');
    this.rutas.navigate(['/prendas']);
  }
}
