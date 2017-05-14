import { Component } from '@angular/core'
import { Product } from "../model/product.model";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app',
    moduleId: module.id,
    templateUrl: "add-product.component.html"
})

export class AddProductComponent {
    newProduct: Product = new Product()
    formSubmitted: boolean = false

    get jsonProduct() {
        return JSON.stringify(this.newProduct)
    }

    addProduct(p: Product) {
        console.log("new product: " + this.jsonProduct)
    }

    getValidationMessages(state: any, thingName?: string): string[] {
        let thing: string = state.path || thingName
        let messages: string[] = []

        if (state.errors) {
            for (let errorName in state.errors) {
                switch(errorName) {
                    case "required":
                        messages.push(`You must enter a ${thing}`)
                        break;
                    case "minlength":
                        messages.push(`${thing} must be at least ${state.errors['minlength'].requiredLength}. Your actual length is: ${state.errors['minlength'].actualLength}`)
                        break;
                    case "pattern":
                        messages.push(`${thing} can only contain letters and spaces. Your actual value is: ${state.errors['pattern'].actualValue}. Requied pattern is: ${state.errors['pattern'].requiredPattern}`)
                        break;
                }
            }
        }
        return messages;
    }

    getFormValidationMessages(form: NgForm): string[] {
        let messages: string[] = []
        Object.keys(form.controls).forEach(k => {
            this.getValidationMessages(form.controls[k], k)
                .forEach(m => messages.push(m))
        })
        return messages
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