import { Component } from '@angular/core'
import { Product } from "./model/product.model";
import { ProductRepository } from "./model/repository.model";

@Component({
    selector: 'app',
    moduleId: module.id,
    templateUrl: "app.component.html"
})

export class AppComponent {
    model: ProductRepository = new ProductRepository()
    selectedProduct: String
    
    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }

    getProducts(): Product[] {
        return this.model.getProducts();
    }

    getSelected(product: Product): boolean {
        return product.name == this.selectedProduct;
    }
}