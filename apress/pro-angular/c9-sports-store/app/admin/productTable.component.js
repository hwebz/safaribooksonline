"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_repository_1 = require("../model/product.repository");
var ProductTableComponent = (function () {
    function ProductTableComponent(respository) {
        this.respository = respository;
    }
    ProductTableComponent.prototype.getProducts = function () {
        return this.respository.getProducts();
    };
    ProductTableComponent.prototype.deleteProduct = function (id) {
        this.respository.deleteProduct(id);
    };
    return ProductTableComponent;
}());
ProductTableComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: "productTable.component.html"
    }),
    __metadata("design:paramtypes", [product_repository_1.ProductRepository])
], ProductTableComponent);
exports.ProductTableComponent = ProductTableComponent;
