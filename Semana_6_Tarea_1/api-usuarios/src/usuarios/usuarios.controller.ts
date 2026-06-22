import { Controller, Post, Get, Body, Param, ParseIntPipe } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post('registro')
  registrar(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.registrar(createUsuarioDto);
  }

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.usuariosService.login(loginDto);
  }

  @Get('perfil/:id')
  perfil(@Param('id', ParseIntPipe) id: number) {
    return this.usuariosService.perfil(id);
  }
}
