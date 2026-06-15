import { Routes } from '@angular/router';
import { Prendas } from './prendas/prendas';
import { InsertarPrenda } from './prendas/insertar-prenda/insertar-prenda';
import { EditarPrenda } from './prendas/editar-prenda/editar-prenda';
import { EliminarPrenda } from './prendas/eliminar-prenda/eliminar-prenda';

export const routes: Routes = [
  {
    path: '',
    component: Prendas,
    pathMatch: 'full',
  },
  {
    path: 'insertar',
    component: InsertarPrenda,
    pathMatch: 'full',
  },
  {
    path: 'editar',
    component: EditarPrenda,
    pathMatch: 'full',
  },
  {
    path: 'eliminar',
    component: EliminarPrenda,
    pathMatch: 'full',
  },
];
