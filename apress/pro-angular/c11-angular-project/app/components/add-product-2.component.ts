import { Component } from '@angular/core'
import { ProductRepository } from "../model/repository.model";
import { ProductFormGroup } from "../model/add-product-form.model";
import { Product } from "../model/product.model";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app',
    moduleId: module.id,
    templateUrl: "add-product-directive.component.html"
})

export class AddProduct2Component {
    model: ProductRepository = new ProductRepository()
    form: ProductFormGroup = new ProductFormGroup()
    newProduct: Product = new Product()
    formSubmitted: boolean = false

    getProduct(key: number): Product {
        return this.model.getProduct(key)
    }

    getProducts(): Product[] {
        return this.model.getProducts()
    }

    get jsonProduct() {
        return JSON.stringify(this.newProduct)
    }

    addProduct(p: Product) {
        // console.log("New product: " + this.jsonProduct)
        this.model.saveProduct(p)
    }

    submitForm(form: NgForm) {
        this.formSubmitted = true
        if (form.valid) {
            this.addProduct(this.newProduct)
            this.newProduct = new Product()
            form.reset()
            this.formSubmitted = false
        }
    }
}