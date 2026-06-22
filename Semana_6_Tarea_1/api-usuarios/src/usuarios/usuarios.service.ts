import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { LoginDto } from './dto/login.dto';
import * as crypto from 'crypto';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  // Hash simple de contraseña (sin bcrypt para mantenerlo simple)
  private hashPassword(password: string): string {
    return crypto.createHash('sha256').update(password).digest('hex');
  }

  async registrar(createUsuarioDto: CreateUsuarioDto): Promise<{message:string}> {
    const existeUsername = await this.usuarioRepository.findOne({
      where: { username: createUsuarioDto.username }
    });
    if (existeUsername) {
      throw new ConflictException('El nombre de usuario ya existe');
    }

    const existeEmail = await this.usuarioRepository.findOne({
      where: { email: createUsuarioDto.email }
    });
    if (existeEmail) {
      throw new ConflictException('El correo electrónico ya está registrado');
    }

    const usuario = this.usuarioRepository.create({
      ...createUsuarioDto,
      password: this.hashPassword(createUsuarioDto.password),
    });
    await this.usuarioRepository.save(usuario);
    return { message: 'Usuario registrado con éxito' };
  }

  async login(loginDto: LoginDto): Promise<{message:string; usuario: Omit<Usuario, 'password'>}> {
    const usuario = await this.usuarioRepository.findOne({
      where: { email: loginDto.email }
    });

    if (!usuario || usuario.password !== this.hashPassword(loginDto.password)) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    // Retornar usuario sin la contraseña
    const { password, ...usuarioSinPassword } = usuario;
    return {
      message: 'Inicio de sesión exitoso',
      usuario: usuarioSinPassword,
    };
  }

  async perfil(id: number): Promise<Omit<Usuario, 'password'>> {
    const usuario = await this.usuarioRepository.findOne({ where: { id } });
    if (!usuario) {
      throw new UnauthorizedException('Usuario no encontrado');
    }
    const { password, ...usuarioSinPassword } = usuario;
    return usuarioSinPassword;
  }
}
