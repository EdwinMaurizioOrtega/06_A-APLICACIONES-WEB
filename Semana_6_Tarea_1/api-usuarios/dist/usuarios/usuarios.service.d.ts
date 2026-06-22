import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { LoginDto } from './dto/login.dto';
export declare class UsuariosService {
    private readonly usuarioRepository;
    constructor(usuarioRepository: Repository<Usuario>);
    private hashPassword;
    registrar(createUsuarioDto: CreateUsuarioDto): Promise<{
        message: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        message: string;
        usuario: Omit<Usuario, 'password'>;
    }>;
    perfil(id: number): Promise<Omit<Usuario, 'password'>>;
}
