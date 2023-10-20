import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    image: ['', Validators.required],
    price: [0, [Validators.required, Validators.min(0)]],
    quality: [0, [Validators.required, Validators.min(0)]],
    description: ['', [Validators.required, Validators.minLength(3)]],
  });
  product!: IProduct;
  mode: 'create' | 'edit' = 'create';
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: ActivatedRoute,
    private routerNext: Router
  ) {}
  async ngOnInit() {
    const { id } = this.router.snapshot.params;
    if (id) {
      this.product = await lastValueFrom(
        this.productService.getOneProduct(+id)
      );
      console.log(this.product);
      this.productForm.patchValue(this.product);
      this.mode = 'edit';
    }
  }

  async onSubmit() {
    try {
      if (this.productForm.valid) {
        if (this.mode === 'create') {
          await lastValueFrom(
            this.productService.addProduct(this.productForm.value as IProduct)
          );
          alert('Them san pham thanh cong!');
        } else {
          await lastValueFrom(
            this.productService.editProduct({
              ...this.product,
              ...this.productForm.value,
            } as IProduct)
          );
          alert('Cap nhat san pham san pham!');
        }
        this.routerNext.navigateByUrl('/products');
      }
    } catch (error: any) {
      console.log(error.error);
    }
  }
}
