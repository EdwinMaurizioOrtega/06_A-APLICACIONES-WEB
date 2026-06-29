import { Routes } from '@angular/router';
import { Prendas } from './features/prendas/prendas';
import { Nuevaprenda } from './features/prendas/nuevaprenda/nuevaprenda';
import { Editarprenda } from './features/prendas/editarprenda/editarprenda';
import { Eliminarprenda } from './features/prendas/eliminarprenda/eliminarprenda';

export const routes: Routes = [
    {
        path:'',
        component:Prendas,
        pathMatch:'full'
    },
     {
        path:'prendas',
        component:Prendas,
        pathMatch:'full'
    },
    {
        path:'nuevaprenda',
        component:Nuevaprenda,
        pathMatch:'full'
    },
    {
        path:'editarprenda/:id',
        component:Editarprenda,
        pathMatch:'full'
    },
    {
        path:'eliminarprenda/:id',
        component:Eliminarprenda,
        pathMatch:'full'
    }
];
