import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { IPrenda } from '../interfaces/iprenda';

@Service()
export class PrendasServices {
  private readonly http = inject(HttpClient);

  ruta: string = 'https://localhost:44304/api/prendasapi';

  todos(): Observable<IPrenda[]> {
    return this.http.get<IPrenda[]>(this.ruta);
  }

  insertar(prenda: IPrenda): Observable<IPrenda> {
    return this.http.post<IPrenda>(this.ruta, prenda);
  }
}
