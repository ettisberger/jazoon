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
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var index_1 = require('./routes/index');
var todos_1 = require("./services/todos");
var App = (function () {
    function App() {
    }
    App = __decorate([
        core_1.Component({
            selector: 'todo-app',
            template: "\n        <h1>todos</h1>\n        <div>\n            <a [routerLink]=\"['TodosList']\">Todos</a>\n            <a [routerLink]=\"['TodoNew']\">New Todo</a>\n        </div>\n        <router-outlet></router-outlet>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [router_1.ROUTER_PROVIDERS, todos_1.TodoService],
            styles: []
        }),
        router_1.RouteConfig([
            { name: 'TodosList', path: '/todos', component: index_1.TodosList, useAsDefault: true },
            { name: 'TodoNew', path: '/new', component: index_1.TodoNew }
        ]), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
}());
exports.App = App;
