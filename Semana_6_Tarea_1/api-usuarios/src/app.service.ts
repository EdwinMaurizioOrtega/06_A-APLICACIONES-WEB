import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus() {
    return {
      status: 'online',
      app: 'Login App API',
      version: '1.0.0',
      endpoints: {
        login: 'POST /auth/login',
        registro: 'POST /auth/registro',
        perfil: 'GET /auth/perfil/:id',
      },
    };
  }
}
