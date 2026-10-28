import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { Product } from './entities/product.entity.js';

@Injectable()
export class ProductsService {
  private products: Product[] = [];
  private nextId = 1;

  create(createProductDto: CreateProductDto) {
    const product: Product = { ...createProductDto, id: this.nextId++ };
    this.products.push(product);
    return { status: 201, message: 'Product created successfully', product };
  }

  findAll() {
    return { status: 200, message: 'Products retrieved successfully', products: this.products };
  }

  findOne(id: number) {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      return { status: 404, message: `Product with id ${id} not found` };
    }
    return { status: 200, message: 'Product retrieved successfully', product };
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) {
      return { status: 404, message: `Product with id ${id} not found` };
    }
    this.products[index] = { ...this.products[index], ...updateProductDto, id };
    return { status: 200, message: 'Product updated successfully', product: this.products[index] };
  }

  remove(id: number) {
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) {
      return { status: 404, message: `Product with id ${id} not found` };
    }
    const [product] = this.products.splice(index, 1);
    return { status: 200, message: 'Product deleted successfully', product };
  }
}