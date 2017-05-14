"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var repository_model_1 = require("../model/repository.model");
var add_product_form_model_1 = require("../model/add-product-form.model");
var product_model_1 = require("../model/product.model");
var AddProduct2Component = (function () {
    function AddProduct2Component() {
        this.model = new repository_model_1.ProductRepository();
        this.form = new add_product_form_model_1.ProductFormGroup();
        this.newProduct = new product_model_1.Product();
        this.formSubmitted = false;
    }
    AddProduct2Component.prototype.getProduct = function (key) {
        return this.model.getProduct(key);
    };
    AddProduct2Component.prototype.getProducts = function () {
        return this.model.getProducts();
    };
    Object.defineProperty(AddProduct2Component.prototype, "jsonProduct", {
        get: function () {
            return JSON.stringify(this.newProduct);
        },
        enumerable: true,
        configurable: true
    });
    AddProduct2Component.prototype.addProduct = function (p) {
        // console.log("New product: " + this.jsonProduct)
        this.model.saveProduct(p);
    };
    AddProduct2Component.prototype.submitForm = function (form) {
        this.formSubmitted = true;
        if (form.valid) {
            this.addProduct(this.newProduct);
            this.newProduct = new product_model_1.Product();
            form.reset();
            this.formSubmitted = false;
        }
    };
    return AddProduct2Component;
}());
AddProduct2Component = __decorate([
    core_1.Component({
        selector: 'app',
        moduleId: module.id,
        templateUrl: "add-product-directive.component.html"
    })
], AddProduct2Component);
exports.AddProduct2Component = AddProduct2Component;
