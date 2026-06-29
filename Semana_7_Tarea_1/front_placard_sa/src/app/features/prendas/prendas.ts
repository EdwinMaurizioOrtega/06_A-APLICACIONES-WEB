import { Component, OnInit } from '@angular/core';
import { IPrenda } from '../../core/interfaces/iprenda';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts;

@Component({
  selector: 'app-prendas',
  imports: [CommonModule, RouterLink],
  templateUrl: './prendas.html',
  styleUrl: './prendas.css',
})
export class Prendas implements OnInit {
  listaPrendas: IPrenda[] = [];

  ngOnInit(): void {
    this.listaPrendas = this.obtenerDemoData();
  }

  private obtenerDemoData(): IPrenda[] {
    return [
      { id: 1, codigo: 'PRE-001', nombre: 'Vestido Floral Verano', categoria: 'Vestidos', talla: 'M', color: 'Estampado', material: 'Algodón Orgánico', precio: 45.00, estado: 'Disponible', descripcion: 'Vestido ligero con estampado floral, ideal para temporada de verano', ubicacion: 'Cuenca - Centro', vendedor: 'María Torres' },
      { id: 2, codigo: 'PRE-002', nombre: 'Chaqueta Jean Reciclado', categoria: 'Chaquetas', talla: 'L', color: 'Azul Denim', material: 'Jean Reciclado', precio: 65.00, estado: 'Disponible', descripcion: 'Chaqueta elaborada con jean reciclado, botones de madera', ubicacion: 'Cuenca - El Ejido', vendedor: 'Carlos Mendoza' },
      { id: 3, codigo: 'PRE-003', nombre: 'Blusa Elegante Sostenible', categoria: 'Blusas', talla: 'S', color: 'Blanco', material: 'Tencel', precio: 35.00, estado: 'Disponible', descripcion: 'Blusa sostenible de Tencel, producción local', ubicacion: 'Cuenca - San Blas', vendedor: 'Ana Pérez' },
      { id: 4, codigo: 'PRE-004', nombre: 'Falda Midi Vintage', categoria: 'Faldas', talla: 'M', color: 'Negro', material: 'Viscosa', precio: 38.00, estado: 'Reservado', descripcion: 'Falda midi estilo vintage, perfecta para la oficina', ubicacion: 'Cuenca - El Barranco', vendedor: 'Laura Idrobo' },
      { id: 5, codigo: 'PRE-005', nombre: 'Camiseta Algodón Orgánico', categoria: 'Camisetas', talla: 'XL', color: 'Verde Oliva', material: 'Algodón Orgánico', precio: 25.00, estado: 'Disponible', descripcion: 'Camiseta básica de algodón orgánico, comercio justo', ubicacion: 'Cuenca - Totoracocha', vendedor: 'Pedro Cordero' },
      { id: 6, codigo: 'PRE-006', nombre: 'Pantalón Palazzo Reciclado', categoria: 'Pantalones', talla: 'L', color: 'Beige', material: 'Poliéster Reciclado', precio: 55.00, estado: 'Disponible', descripcion: 'Pantalón palazzo elaborado con poliéster reciclado post-consumo', ubicacion: 'Cuenca - Challuabamba', vendedor: 'Diego Orellana' },
      { id: 7, codigo: 'PRE-007', nombre: 'Sombrero de Paja Toquilla', categoria: 'Accesorios', talla: 'Única', color: 'Natural', material: 'Paja Toquilla', precio: 30.00, estado: 'Disponible', descripcion: 'Sombrero tradicional cuencano, hecho a mano por artesanos locales', ubicacion: 'Cuenca - Centro Histórico', vendedor: 'Ana Pérez' },
      { id: 8, codigo: 'PRE-008', nombre: 'Cartera Cuero Vegano', categoria: 'Accesorios', talla: 'Única', color: 'Café', material: 'Cuero Vegano', precio: 48.00, estado: 'Vendido', descripcion: 'Cartera artesanal de cuero vegano, diseño moderno', ubicacion: 'Cuenca - San Sebastián', vendedor: 'María Torres' },
    ];
  }

  exportarPDF(): void {
    const cuerpoTabla = [
      ['#', 'Código', 'Nombre', 'Categoría', 'Talla', 'Color', 'Material', 'Precio', 'Estado', 'Ubicación', 'Vendedor'],
      ...this.listaPrendas.map((p, i) => [
        i + 1,
        p.codigo,
        p.nombre,
        p.categoria,
        p.talla,
        p.color,
        p.material,
        `$${p.precio.toFixed(2)}`,
        p.estado,
        p.ubicacion,
        p.vendedor,
      ]),
    ];

    const documento: any = {
      pageOrientation: 'landscape',
      content: [
        {
          text: 'PLACARD S.A.',
          style: 'titulo',
        },
        {
          text: 'Plataforma Digital de Moda Circular - Catálogo de Prendas',
          style: 'subtitulo',
        },
        {
          text: `Fecha: ${new Date().toLocaleDateString('es-EC')} | Total prendas: ${this.listaPrendas.length}`,
          margin: [0, 0, 0, 15],
        },
        {
          table: {
            headerRows: 1,
            widths: ['auto', 'auto', '*', 'auto', 'auto', 'auto', '*', 'auto', 'auto', '*', '*'],
            body: cuerpoTabla,
          },
        },
        {
          text: '\nPLACARD S.A. - Moda Circular en Cuenca - Todos los derechos reservados',
          style: 'pie',
        },
      ],
      styles: {
        titulo: {
          fontSize: 22,
          bold: true,
          alignment: 'center',
          color: '#0b111e',
        },
        subtitulo: {
          fontSize: 13,
          alignment: 'center',
          margin: [0, 5, 0, 15],
          color: '#555555',
        },
        pie: {
          fontSize: 9,
          alignment: 'center',
          margin: [0, 20, 0, 0],
          color: '#999999',
        },
      },
    };

    (pdfMake as any).createPdf(documento).open();
  }
}
