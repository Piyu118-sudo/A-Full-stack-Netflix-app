import { IsEmail, IsEnum, IsNotEmpty, MinLength } from 'class-validator';
import { Role } from '../roles.enum';

export class RegisterDto {
    @IsNotEmpty()
    name!: string;

    @IsEmail()
    email!: string;

    @IsEnum(Role)
    role!: Role;

    @MinLength(6)
    password!: string;
}
