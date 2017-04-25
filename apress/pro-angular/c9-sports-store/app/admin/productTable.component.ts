import { Component } from '@angular/core'
import { ProductRepository } from "../model/product.repository";
import { Product } from "../model/product.model";

@Component({
    moduleId: module.id,
    templateUrl: "productTable.component.html"
})

export class ProductTableComponent {
    constructor(private respository: ProductRepository) {}

    getProducts(): Product[] {
        return this.respository.getProducts()
    }

    deleteProduct(id: number) {
        this.respository.deleteProduct(id)
    }
}