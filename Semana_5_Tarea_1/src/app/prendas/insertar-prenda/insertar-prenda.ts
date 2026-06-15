import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PrendasServices } from '../../services/prendas.services';
import { IPrenda } from '../../interfaces/iprenda';

@Component({
  selector: 'app-insertar-prenda',
  imports: [FormsModule, RouterLink],
  templateUrl: './insertar-prenda.html',
  styleUrl: './insertar-prenda.css',
})
export class InsertarPrenda {
  private readonly prendasServicio = inject(PrendasServices);
  private readonly router = inject(Router);

  modelo: IPrenda = {
    id_usuario: 1,
    titulo: '',
    descripcion: '',
    categoria: '',
    marca: '',
    talla: '',
    color: '',
    estado_prenda: 'nuevo',
    tipo_publicacion: 'venta',
    precio: undefined,
    disponible: true,
    ciudad: 'Cuenca',
    sector: '',
    latitud: undefined,
    longitud: undefined,
    estado_publicacion: 'activa',
  };

  guardar(): void {
    this.prendasServicio.insertar(this.modelo).subscribe({
      next: () => {
        alert('Prenda guardada exitosamente');
        this.router.navigate(['/']);
      },
      error: (er) => {
        console.error('Error al guardar la prenda', er);
        alert('Error al guardar la prenda. Revisa la consola.');
      },
    });
  }
}
