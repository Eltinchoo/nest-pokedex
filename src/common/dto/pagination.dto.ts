import { IsNumber, IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDto {
    // que sea opcional que hay un limite
    @IsOptional() 
    // que sea un número positivo
    @IsPositive()
    // que sea un numero
    @IsNumber()
     // que sea mínimamente un 1 en adelante 
    @Min(1) 
    limit?: number;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    offset?: number; 


    //! el (?) es para decirle a TypeScript que es opcional
}