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
var static_datasource_1 = require("./static.datasource");
var ProductRepository = (function () {
    function ProductRepository(dataSource) {
        var _this = this;
        this.dataSource = dataSource;
        this.products = [];
        this.categories = [];
        dataSource.getProducts().subscribe(function (data) {
            _this.products = data;
            _this.categories = data.map(function (p) { return p.category; })
                .filter(function (value, index, array) { return array.indexOf(value) == index; }).sort();
            // Cause indexOf(value) just return first element of result array
            // so that will distinct all the duplicated values
            // E.g: a = 'abcdeabcde'; a.indexOf('a') = 0
            // => a.indexOf('a') == 0 && a.indexOf('a') != 5
        });
    }
    ProductRepository.prototype.getProducts = function (category) {
        if (category === void 0) { category = null; }
        return this.products.filter(function (p) { return category == null || category == p.category; });
    };
    ProductRepository.prototype.getProduct = function (id) {
        return this.products.find(function (p) { return p.id == id; });
    };
    ProductRepository.prototype.getCategories = function () {
        return this.categories;
    };
    return ProductRepository;
}());
ProductRepository = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [static_datasource_1.StaticDataSource])
], ProductRepository);
exports.ProductRepository = ProductRepository;
