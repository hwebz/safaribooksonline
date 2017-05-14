import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from "./app.component"
import { AddProductComponent } from "./components/add-product.component";
import { AddProduct2Component } from "./components/add-product-2.component";
import { PaAttrDirective } from "./components/attr.directive";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [AppComponent, 
                    AddProductComponent, 
                    AddProduct2Component, 
                    PaAttrDirective],
    bootstrap: [AddProduct2Component]
})

export class AppModule {
    
}