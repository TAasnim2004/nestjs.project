import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
   @ApiProperty({ example: 'Clean Code', description: 'Le nom du produit' })
    name: string;
    @ApiProperty({ example: 'Guide pratique pour écrire du code lisible', description: 'La description du produit' })
    description: string;
    @ApiProperty({ example: 35.5, description: 'Le prix du produit' })
    price: number;
}