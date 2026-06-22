import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateUsuarioDto {
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    username!:string;

    @IsString()
    @MinLength(4)
    @MaxLength(255)
    password!:string;

    @IsString()
    @MaxLength(150)
    nombre_completo!:string;

    @IsString()
    @MaxLength(150)
    email!:string;
}
