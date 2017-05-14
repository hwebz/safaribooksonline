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
var ProductRepository = (function () {
    function ProductRepository() {
        this.products = [{
                id: 1,
                name: "Kayak",
                category: "Watersports",
                description: "A boat for one person",
                price: 275
            },
            {
                id: 2,
                name: "Lifejacket",
                category: "Watersports",
                description: "Protective and fashionable",
                price: 48.95
            },
            {
                id: 3,
                name: "Soccer Ball",
                category: "Soccer",
                description: "FIFA-approved size and weight",
                price: 19.50
            },
            {
                id: 4,
                name: "Corner Flags",
                category: "Soccer",
                description: "Give your playing field a professional touch",
                price: 34.95
            },
            {
                id: 5,
                name: "Stadium",
                category: "Soccer",
                description: "Flat-packed 35,000-seat stadium",
                price: 79500
            },
            {
                id: 6,
                name: "Thinking Cap",
                category: "Chess",
                description: "Improve brain efficiency by 75%",
                price: 16
            },
            {
                id: 7,
                name: "Unsteady Chair",
                category: "Chess",
                description: "Secretly give your opponent a disadvantage",
                price: 29.95
            },
            {
                id: 8,
                name: "Human Chess Board",
                category: "Chess",
                description: "A fun game for the family",
                price: 75
            },
            {
                id: 9,
                name: "Bling Bling King",
                category: "Chess",
                description: "Gold-plated, diamond-studded King",
                price: 1200
            }
        ];
        this.categories = [];
        this.categories = this.products.map(function (p) { return p.category; })
            .filter(function (value, index, array) { return array.indexOf(value) == index; }).sort();
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
    ProductRepository.prototype.saveProduct = function (p) {
        this.products.push(p);
    };
    return ProductRepository;
}());
ProductRepository = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ProductRepository);
exports.ProductRepository = ProductRepository;
