import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuarios/entities/usuario.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:"postgres",
    host:"localhost",
    port:5432,
    username:"postgres",
    password:"ededed",
    database:"placard_moda_circular",
    entities:[Usuario],
    synchronize:true,
  }),
    UsuariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
