import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

import { ProductsService } from '../../../core/service/products/products.service';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    //   console.log(id);
    //   this.product = this.productsService.getProduct(id)!;
    //   console.log(this.product);
    });
  }

  fetchProduct(id: string){
    this.productsService.getProduct(id)
    .subscribe(product => {
      this.product = product;
    })
  }

  createProduct() {
    const newProduct: Product = {
      id: '222',
      title: 'nuevo desde angular'
    };
    this.productsService.createProduct(newProduct)
    .subscribe(product => {
      console.log(product)
    })
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      id: '222',
      title: 'edición diferente'
    };
    this.productsService.updateProduct(2, updateProduct)
    .subscribe(product => {
      console.log(product)
    })
  }

  deleteProduct() {
    this.productsService.deleteProduct('19')
    .subscribe(rta => {
      console.log(rta);
    })
  }

}
