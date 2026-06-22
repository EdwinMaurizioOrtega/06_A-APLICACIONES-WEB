import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuarios')
export class Usuario {
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({length:50, unique:true})
    username!:string;

    @Column({length:255})
    password!:string;

    @Column({length:150})
    nombre_completo!:string;

    @Column({length:150, unique:true})
    email!:string;

    @CreateDateColumn()
    createAt!:Date;
}
