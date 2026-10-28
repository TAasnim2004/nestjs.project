import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
    @ApiProperty({ example: 'Laptop', description: 'The name of the product' })
    name: string;
    @ApiProperty({ example: 'Portable 15-inch laptop', description: 'The description of the product' })
    description: string;
    @ApiProperty({ example: 1499.99, description: 'The price of the product' })
    price: number;
    @ApiProperty({ example: 25, description: 'The quantity in stock' })
    stock: number;
}