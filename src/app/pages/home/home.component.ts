import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from '../models/product.model';

const ROWS_HEIGHT: { [id:number]: number } = { 1: 400, 3:335, 4: 350};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
  
})
export class HomeComponent {

  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string | undefined;

  constructor(private _cartService: CartService) {}

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }

  onAddToCart(product: Product): void {
    this._cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    });
  }

}