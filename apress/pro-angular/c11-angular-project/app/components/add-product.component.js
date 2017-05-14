"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_model_1 = require("../model/product.model");
var AddProductComponent = (function () {
    function AddProductComponent() {
        this.newProduct = new product_model_1.Product();
        this.formSubmitted = false;
    }
    Object.defineProperty(AddProductComponent.prototype, "jsonProduct", {
        get: function () {
            return JSON.stringify(this.newProduct);
        },
        enumerable: true,
        configurable: true
    });
    AddProductComponent.prototype.addProduct = function (p) {
        console.log("new product: " + this.jsonProduct);
    };
    AddProductComponent.prototype.getValidationMessages = function (state, thingName) {
        var thing = state.path || thingName;
        var messages = [];
        if (state.errors) {
            for (var errorName in state.errors) {
                switch (errorName) {
                    case "required":
                        messages.push("You must enter a " + thing);
                        break;
                    case "minlength":
                        messages.push(thing + " must be at least " + state.errors['minlength'].requiredLength + ". Your actual length is: " + state.errors['minlength'].actualLength);
                        break;
                    case "pattern":
                        messages.push(thing + " can only contain letters and spaces. Your actual value is: " + state.errors['pattern'].actualValue + ". Requied pattern is: " + state.errors['pattern'].requiredPattern);
                        break;
                }
            }
        }
        return messages;
    };
    AddProductComponent.prototype.getFormValidationMessages = function (form) {
        var _this = this;
        var messages = [];
        Object.keys(form.controls).forEach(function (k) {
            _this.getValidationMessages(form.controls[k], k)
                .forEach(function (m) { return messages.push(m); });
        });
        return messages;
    };
    AddProductComponent.prototype.submitForm = function (form) {
        this.formSubmitted = true;
        if (form.valid) {
            this.addProduct(this.newProduct);
            this.newProduct = new product_model_1.Product();
            form.reset();
            this.formSubmitted = false;
        }
    };
    return AddProductComponent;
}());
AddProductComponent = __decorate([
    core_1.Component({
        selector: 'app',
        moduleId: module.id,
        templateUrl: "add-product.component.html"
    })
], AddProductComponent);
exports.AddProductComponent = AddProductComponent;
