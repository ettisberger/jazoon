"use strict";
var TodoService = (function () {
    function TodoService() {
        this.todos = [];
    }
    TodoService.prototype.addTodo = function (newTodo) {
        this.todos = this.todos.concat([newTodo]);
    };
    return TodoService;
}());
exports.TodoService = TodoService;
