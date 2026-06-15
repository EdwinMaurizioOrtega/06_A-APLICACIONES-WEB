import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PrendasServices } from '../services/prendas.services';
import { IPrenda } from '../interfaces/iprenda';

@Component({
  selector: 'app-prendas',
  imports: [RouterLink],
  templateUrl: './prendas.html',
  styleUrl: './prendas.css',
})
export class Prendas implements OnInit {
  lista: IPrenda[] = [];
  private readonly prendasServicio = inject(PrendasServices);

  ngOnInit(): void {
    this.prendasServicio.todos().subscribe({
      next: (prendas) => {
        this.lista = prendas;
        console.log(this.lista);
      },
      error: (er) => {
        console.log('No se pudo cargar las prendas', er);
      },
    });
  }
}
