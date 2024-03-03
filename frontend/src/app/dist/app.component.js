"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var my_component_component_1 = require("./folder/my-component/my-component.component");
var topnavbar_component_1 = require("./folder/topnavbar/topnavbar.component");
var secondnavbar_component_1 = require("./folder/secondnavbar/secondnavbar.component");
var body_component_1 = require("./folder/body/body.component");
var testbody_component_1 = require("./folder/testbody/testbody.component");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-new-project';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            standalone: true,
            templateUrl: './app.component.html',
            styleUrl: './app.component.css',
            imports: [common_1.CommonModule, router_1.RouterOutlet, testbody_component_1.TestbodyComponent, my_component_component_1.MyComponentComponent, body_component_1.BodyComponent, topnavbar_component_1.TopnavbarComponent, secondnavbar_component_1.SecondnavbarComponent]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
