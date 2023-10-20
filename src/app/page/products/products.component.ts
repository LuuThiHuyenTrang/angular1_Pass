import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products!: IProduct[];
  constructor(private productService: ProductService) {}
  async ngOnInit() {
    try {
      this.products = await lastValueFrom(this.productService.getProduct());
    } catch (error) {}
  }
  async removeProduct(id: number) {
    const confirm = window.confirm('Are you sure delete');
    if (!confirm) return;
    try {
      await lastValueFrom(this.productService.removeProduct(id));
      this.products = this.products.filter((item: any) => item.id !== id);
      alert('Xoa thanh cong!');
    } catch (error) {}
  }
}
