"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var repository_model_1 = require("./model/repository.model");
var AppComponent = (function () {
    function AppComponent() {
        this.model = new repository_model_1.ProductRepository();
    }
    AppComponent.prototype.getProduct = function (key) {
        return this.model.getProduct(key);
    };
    AppComponent.prototype.getProducts = function () {
        return this.model.getProducts();
    };
    AppComponent.prototype.getSelected = function (product) {
        return product.name == this.selectedProduct;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        moduleId: module.id,
        templateUrl: "app.component.html"
    })
], AppComponent);
exports.AppComponent = AppComponent;
