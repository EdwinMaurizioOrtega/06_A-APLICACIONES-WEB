import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { LoginDto } from './dto/login.dto';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    registrar(createUsuarioDto: CreateUsuarioDto): Promise<{
        message: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        message: string;
        usuario: Omit<import("./entities/usuario.entity").Usuario, "password">;
    }>;
    perfil(id: number): Promise<Omit<import("./entities/usuario.entity").Usuario, "password">>;
}
