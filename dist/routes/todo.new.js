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
var todos_1 = require("../services/todos");
var NewTodoInput = (function () {
    function NewTodoInput() {
        this.newTodo = {};
        this.create = new core_1.EventEmitter();
    }
    NewTodoInput.prototype.saveTodo = function () {
        this.newTodo.completed = false;
        this.create.emit(this.newTodo);
        this.newTodo = {};
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], NewTodoInput.prototype, "create", void 0);
    NewTodoInput = __decorate([
        core_1.Component({
            selector: 'new-todo-input',
            template: "\n        <div>\n            <input type=\"text\" [(ngModel)] = \"newTodo.text\" />\n            <button (click)=\"saveTodo()\">Save</button>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], NewTodoInput);
    return NewTodoInput;
}());
var TodoNew = (function () {
    function TodoNew(todoService) {
        this.todoService = todoService;
    }
    TodoNew.prototype.addTodoToService = function (newTodo) {
        this.todoService.addTodo(newTodo);
    };
    TodoNew = __decorate([
        core_1.Component({
            selector: 'todo-new',
            template: "\n        <h1>Todo New</h1>\n        <new-todo-input (create)=\"addTodoToService($event)\"></new-todo-input>\n        \n    ",
            directives: [NewTodoInput],
            providers: [],
            styles: []
        }), 
        __metadata('design:paramtypes', [todos_1.TodoService])
    ], TodoNew);
    return TodoNew;
}());
exports.TodoNew = TodoNew;
